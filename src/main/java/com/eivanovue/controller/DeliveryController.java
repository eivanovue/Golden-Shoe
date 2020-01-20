package com.eivanovue.controller;

import com.eivanovue.model.Delivery;
import com.eivanovue.service.DeliveryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryController {

  private final DeliveryService deliveryService;

  public DeliveryController(DeliveryService deliveryService) {
    this.deliveryService = deliveryService;
  }

  @GetMapping
  public @NotNull Iterable<Delivery> getDeliveries() {
    return deliveryService.getAllDeliveries();
  }
}
