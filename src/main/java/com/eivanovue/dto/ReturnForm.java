package com.eivanovue.dto;

import com.eivanovue.model.Address;
import com.eivanovue.model.ReturnProduct;
import com.eivanovue.model.User;

import java.util.List;

public class ReturnForm {

  private List<ReturnProduct> returnProducts;
  private User user;
  private Address address;
  private double amount;
  private String orderReference;

  public List<ReturnProduct> getReturnProducts() { return returnProducts; }
  public void setReturnProducts(List<ReturnProduct> returnProducts) { this.returnProducts = returnProducts; }
  public User getUser() { return user; }
  public void setUser(User user) { this.user = user; }
  public Address getAddress() { return address; }
  public void setAddress(Address address) { this.address = address; }
  public double getAmount() { return amount; }
  public void setAmount(double amount) { this.amount = amount; }
  public String getOrderReference() { return orderReference; }
  public void setOrderReference(String orderReference) { this.orderReference = orderReference; }
}
