package com.eivanovue.service;

import com.eivanovue.dto.OrderForm;
import com.eivanovue.dto.OrderProductDto;
import com.eivanovue.enums.OrderStatus;
import com.eivanovue.model.*;
import com.eivanovue.repository.OrderRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

  private final OrderRepository orderRepository;
  private final EmailService emailService;
  private final OrderProductService orderProductService;
  private final ProductService productService;
  private final DiscountService discountService;

  private AtomicInteger seq = new AtomicInteger();

  public OrderServiceImpl(OrderRepository orderRepository, EmailService emailService, OrderProductService orderProductService, ProductService productService, DiscountService discountService) {
    this.orderRepository = orderRepository;
    this.emailService = emailService;
    this.orderProductService = orderProductService;
    this.productService = productService;
    this.discountService = discountService;
  }

  @Override
  public Iterable<Order> getAllOrders() {
    return this.orderRepository.findAll();
  }

  @Override
  public Order create(Order order) {
    order.setDateCreated(LocalDateTime.now());
    return this.orderRepository.save(order);
  }

  @Override
  public void update(Order order) {
    this.orderRepository.save(order);
  }

  @Override
  public Order getOrderByReference(String reference){
    return orderRepository.findByReference(reference)
            .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
  }

  @Override
  public void cancelOrder(String reference){
    Optional<Order> order = this.orderRepository.findByReference(reference);
    order.ifPresent(value -> {
      value.setStatus("CANCELED");
      this.orderRepository.save(value);
    });
  }

  @Override
  public void deliverOrder(String reference){
    Optional<Order> order = this.orderRepository.findByReference(reference);
    order.ifPresent(value -> {
      value.setStatus("DELIVERED");
      this.orderRepository.save(value);
    });
  }
  public String generateReference(Order order){
    return "ORDER" + LocalDateTime.now().getYear() + seq.incrementAndGet();
  }

  @Override
  public void sendEmailConfirmation(Order order) {
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

  @Override
  public Order createOrderFromForm(OrderForm form){
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
    String reference = generateReference(order);
    order.setReference(reference);

    // set time of order creation and save to db
    order = create(order);

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
    update(order);

    calculateStocks(orderProducts);
    sendEmailConfirmation(order);

    return order;
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
}