package com.eivanovue.service;

import com.eivanovue.model.Order;

public interface OrderService {
  Iterable<Order> getAllOrders();

  Order create(Order order);

  void update(Order order);

  String generateReference(Order order);
}
