package com.eivanovue.service;

import com.eivanovue.model.Delivery;

public interface DeliveryService {
  Iterable<Delivery> getAllDeliveries();

  Delivery getDelivery(long id);

  Delivery save(Delivery delivery);
}
