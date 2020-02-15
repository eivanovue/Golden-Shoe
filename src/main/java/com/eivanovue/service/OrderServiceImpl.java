package com.eivanovue.service;

import com.eivanovue.model.Order;
import com.eivanovue.repository.OrderRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

  private final OrderRepository orderRepository;
  private final EmailService emailService;
  private AtomicInteger seq = new AtomicInteger();

  public OrderServiceImpl(OrderRepository orderRepository, EmailService emailService) {
    this.orderRepository = orderRepository;
    this.emailService = emailService;
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

}