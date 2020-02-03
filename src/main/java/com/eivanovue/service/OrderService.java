package com.eivanovue.service;

import com.eivanovue.model.Order;

import java.util.List;

public interface OrderService {
  Iterable<Order> getAllOrders();

  Order create(Order order);

  void update(Order order);

    Order getOrderByReference(String reference);

    String generateReference(Order order);
}
