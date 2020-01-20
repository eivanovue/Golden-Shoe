package com.eivanovue.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @JsonFormat(pattern = "dd/MM/yyyy")
  private LocalDateTime dateCreated;

  private String status;

  @JsonManagedReference
  @OneToMany(mappedBy = "pk.order")
  @Valid
  private List<OrderProduct> orderProducts = new ArrayList<>();

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "delivery_id")
  private Delivery delivery;

  @Transient
  public Double getTotalOrderPrice() {
    double sum = 0D;
    List<OrderProduct> orderProducts = getOrderProducts();
    for(OrderProduct op : orderProducts) {
      sum += op.getTotalPrice();
    }
    return sum;
  }

  @Transient
  public int getNumberOfProducts() {
    return this.orderProducts.size();
  }

  public long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public LocalDateTime getDateCreated() {
    return dateCreated;
  }

  public void setDateCreated(LocalDateTime dateCreated) {
    this.dateCreated = dateCreated;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public List<OrderProduct> getOrderProducts() {
    return orderProducts;
  }

  public void setOrderProducts(List<OrderProduct> orderProducts) {
    this.orderProducts = orderProducts;
  }

  public Delivery getDelivery() {
    return delivery;
  }

  public void setDelivery(Delivery delivery) {
    this.delivery = delivery;
  }
}
