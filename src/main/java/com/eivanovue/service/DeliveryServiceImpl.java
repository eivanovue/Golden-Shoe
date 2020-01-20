package com.eivanovue.service;

import com.eivanovue.model.Delivery;
import com.eivanovue.repository.DeliveryRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DeliveryServiceImpl implements DeliveryService {

  private final DeliveryRepository deliveryRepository;

  public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
    this.deliveryRepository = deliveryRepository;
  }

  @Override
  public Iterable<Delivery> getAllDeliveries() {
    return deliveryRepository.findAll();
  }

  @Override
  public Delivery getDelivery(long id) {
    return deliveryRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Delivery not found"));
  }

  @Override
  public Delivery save(Delivery delivery) {
    return deliveryRepository.save(delivery);
  }
}
