package com.eivanovue.controller;

import com.eivanovue.dto.OrderForm;
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
  private final DiscountService discountService;

  public OrderController(ProductService productService, OrderService orderService, OrderProductService orderProductService, EmailService emailService, DiscountService discountService) {
    this.productService = productService;
    this.orderService = orderService;
    this.orderProductService = orderProductService;
    this.discountService = discountService;
  }

  @GetMapping
  public Order get(@RequestParam String reference){
    return this.orderService.getOrderByReference(reference);
  }

  @PostMapping(value = {"cancel", "/cancel"})
  public void cancelOrder(@RequestParam String reference){
    this.orderService.cancelOrder(reference);
  }

  @PostMapping
  public ResponseEntity<Order> create(@RequestBody OrderForm form) {

    Order order = this.orderService.createOrderFromForm(form);
    String uri = ServletUriComponentsBuilder
      .fromCurrentServletMapping()
      .path("/orders/{id}")
      .buildAndExpand(order.getId())
      .toString();
    HttpHeaders headers = new HttpHeaders();
    headers.add("Location", uri);

    return new ResponseEntity<>(order, headers, HttpStatus.CREATED);

  }


}


