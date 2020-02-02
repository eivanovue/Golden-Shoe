package com.eivanovue.dto;

import com.eivanovue.model.Address;
import com.eivanovue.model.Delivery;
import com.eivanovue.model.Discount;
import com.eivanovue.model.User;

import java.util.List;

public class OrderForm {
  private List<OrderProductDto> productOrders;
  private Delivery delivery;
  private Address address;
  private User user;
  private Discount discount;

  public List<OrderProductDto> getProductOrders() { return productOrders; }
  public void setProductOrders(List<OrderProductDto> productOrders) { this.productOrders = productOrders; }
  public Delivery getDelivery() { return delivery; }
  public void setDelivery(Delivery delivery) { this.delivery = delivery; }
  public Address getAddress() { return address; }
  public void setAddress(Address address) { this.address = address; }
  public User getUser() { return user; }
  public void setUser(User user) { this.user = user; }
  public Discount getDiscount() { return discount; }
  public void setDiscount(Discount discount) {
    this.discount = discount;
  }
}