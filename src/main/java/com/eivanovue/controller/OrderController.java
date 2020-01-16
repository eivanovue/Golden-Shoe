package com.eivanovue.controller;

import com.eivanovue.dto.OrderProductDto;
import com.eivanovue.enums.OrderStatus;
import com.eivanovue.model.Order;
import com.eivanovue.model.OrderProduct;
import com.eivanovue.service.OrderProductService;
import com.eivanovue.service.OrderService;
import com.eivanovue.service.ProductService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

  public OrderController(ProductService productService, OrderService orderService, OrderProductService orderProductService) {
    this.productService = productService;
    this.orderService = orderService;
    this.orderProductService = orderProductService;
  }

  @PostMapping
  public ResponseEntity<Order> create(@RequestBody OrderForm form) {
    List<OrderProductDto> formDtos = form.getProductOrders();
    validateProductsExistence(formDtos);

    Order order = new Order();
    order.setStatus(OrderStatus.PAID.name());
    // set time of order creation and save to db
    order = this.orderService.create(order);

    List<OrderProduct> orderProducts = new ArrayList<>();
    for(OrderProductDto dto : formDtos){
      orderProducts.add(orderProductService.create(new OrderProduct(order, productService.getProduct(dto
        .getProduct()
        .getId()), dto.getQuantity())));
    }

    order.setOrderProducts(orderProducts);
    this.orderService.update(order);

    String uri = ServletUriComponentsBuilder
      .fromCurrentServletMapping()
      .path("/orders/{id}")
      .buildAndExpand(order.getId())
      .toString();
    HttpHeaders headers = new HttpHeaders();
    headers.add("Location", uri);

    return new ResponseEntity<>(order, headers, HttpStatus.CREATED);

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

  public static class OrderForm {
    private List<OrderProductDto> productOrders;
    List<OrderProductDto> getProductOrders() {
      return productOrders;
    }

    public void setProductOrders(List<OrderProductDto> productOrders) {
      this.productOrders = productOrders;
    }
  }
}


