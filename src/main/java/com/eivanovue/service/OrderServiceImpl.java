package com.eivanovue.service;

import com.eivanovue.model.Order;
import com.eivanovue.repository.OrderRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.SequenceGenerator;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

  private final OrderRepository orderRepository;
  private AtomicInteger seq = new AtomicInteger();

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

  @Override
  public Order getOrderByReference(String reference){
    return orderRepository.findByReference(reference)
            .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
  }

  public String generateReference(Order order){
    return "REF" + LocalDateTime.now().getYear() + seq.incrementAndGet();
  }
}