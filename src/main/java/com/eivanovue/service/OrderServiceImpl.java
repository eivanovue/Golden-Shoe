package com.eivanovue.service;

import com.eivanovue.model.Order;
import com.eivanovue.repository.OrderRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

  private final OrderRepository orderRepository;

  public OrderServiceImpl(OrderRepository orderRepository) {
    this.orderRepository = orderRepository;
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
}