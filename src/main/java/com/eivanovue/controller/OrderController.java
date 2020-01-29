package com.eivanovue.controller;

import com.eivanovue.dto.OrderProductDto;
import com.eivanovue.enums.OrderStatus;
import com.eivanovue.model.*;
import com.eivanovue.service.*;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

  private final ProductService productService;
  private final OrderService orderService;
  private final OrderProductService orderProductService;
  private final EmailService emailService;
  private final DiscountService discountService;

  public OrderController(ProductService productService, OrderService orderService, OrderProductService orderProductService, EmailService emailService, DiscountService discountService) {
    this.productService = productService;
    this.orderService = orderService;
    this.orderProductService = orderProductService;
    this.emailService = emailService;
    this.discountService = discountService;
  }

  @GetMapping
  public Order get(@RequestParam String reference){
    return this.orderService.getOrderByReference(reference);
  }

  @PostMapping
  public ResponseEntity<Order> create(@RequestBody OrderForm form) {

    List<OrderProductDto> formDtos = form.getProductOrders();
    Delivery delivery = form.getDelivery();
    Address address = form.getAddress();
    User user = form.getUser();
    Discount discount = form.getDiscount();

    //check product exist in db
    validateProductsExistence(formDtos);

    Order order = new Order();
    order.setStatus(OrderStatus.PAID.name());
    order.setDelivery(delivery);
    order.setAddress(address);
    order.setUser(user);
    String reference = orderService.generateReference(order);
    order.setReference(reference);

    // set time of order creation and save to db
    order = this.orderService.create(order);

    List<OrderProduct> orderProducts = new ArrayList<>();
    for(OrderProductDto dto : formDtos){
      orderProducts.add(orderProductService.create(new OrderProduct(order, productService.getProduct(dto
        .getProduct()
        .getId()), dto.getQuantity(), dto.getProductSize())));
    }

    order.setOrderProducts(orderProducts);
    order.setDiscount(discount);
    if(discount != null){
      discountService.useDiscount(discount.getVoucher());
    }
    this.orderService.update(order);

    calculateStocks(orderProducts);
    sendEmailConfirmation(order);
    String uri = ServletUriComponentsBuilder
      .fromCurrentServletMapping()
      .path("/orders/{id}")
      .buildAndExpand(order.getId())
      .toString();
    HttpHeaders headers = new HttpHeaders();
    headers.add("Location", uri);

    return new ResponseEntity<>(order, headers, HttpStatus.CREATED);

  }

  private void sendEmailConfirmation(Order order) {
     String to = order.getUser().getEmail();
     String subject = "Your order - " + order.getReference();
     String message =
         "Dear " + order.getUser().getName() + ",\n" +
         "\n" +
         "Thank you for shopping with us! Your order with Golden Shoe has been confirmed and will arrive in" +
           + order.getDelivery().getDays() + " day(s). You can find the order information bellow."
         + "\n" + "\n" +
         "Order reference: " + order.getReference() + "\n" + "\n" +

           order.getStringifiedOrder() + "\n" +

         "Kind regards" + ",\n" +
         "Golden Shoe Team";

     emailService.sendSimpleMessage(to, subject, message);
  }

  private void validateProductsExistence(List<OrderProductDto> orderProducts) {
    List<OrderProductDto> list = orderProducts
      .stream()
      .filter(op -> Objects.isNull(productService.getProduct(op
        .getProduct()
        .getId())))
      .collect(Collectors.toList());

    if (!CollectionUtils.isEmpty(list)) {
      new ResourceNotFoundException("Product not found");
    }
  }

  private void calculateStocks(List<OrderProduct> orderProducts) {
    orderProducts.forEach(orderProductService::calculateStock);
  }

  public static class OrderForm {
    private List<OrderProductDto> productOrders;
    private Delivery delivery;
    private Address address;
    private User user;
    private Discount discount;

    List<OrderProductDto> getProductOrders() {
      return productOrders;
    }
    public void setProductOrders(List<OrderProductDto> productOrders) {
      this.productOrders = productOrders;
    }
    public Delivery getDelivery() {
      return delivery;
    }
    public void setDelivery(Delivery delivery) {
      this.delivery = delivery;
    }
    public Address getAddress() {
      return address;
    }
    public void setAddress(Address address) {
      this.address = address;
    }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Discount getDiscount() {
      return discount;
    }

    public void setDiscount(Discount discount) {
      this.discount = discount;
    }
  }
}


