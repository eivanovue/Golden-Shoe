package com.eivanovue.service;

import com.eivanovue.model.OrderProduct;
import com.eivanovue.repository.OrderProductRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

  private OrderProductRepository orderProductRepository;

  public OrderProductServiceImpl(OrderProductRepository orderProductRepository) {
    this.orderProductRepository = orderProductRepository;
  }

  @Override
  public OrderProduct create(OrderProduct orderProduct) {
    return this.orderProductRepository.save(orderProduct);
  }
}