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

  private String reference;

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

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "discount_id")
  private Discount discount;

  @Embedded
  private Address address;

  @Embedded
  private User user;

  @Transient
  public Double getTotalOrderPrice() {
    double sum = 0D;
    List<OrderProduct> orderProducts = getOrderProducts();
    for(OrderProduct op : orderProducts) {
      sum += op.getTotalPrice();
    }

    if(discount != null){
      return (sum + getDelivery().getPrice()) - discount.getValue();
    }
    return sum + getDelivery().getPrice();
  }

  @Transient
  public String getStringifiedOrder(){
    StringBuilder sb = new StringBuilder();

    sb.append("Product List").append("\n");
    sb.append("--------------------------------------------------------------------------------------------------------------------------").append("\n");
    getOrderProducts().forEach(item -> {
      sb.append(item.getPk().getProduct().getName())
        .append(" - Size: ")
        .append(item.getProductSize().getSize())
        .append(" - Quantity: ")
        .append(item.getQuantity())
        .append(" - Price: $")
        .append(item.getPk().getProduct().getPrice())
        .append("\n");
    });
    sb.append("\n");

    sb.append("Customer Information").append("\n");
    sb.append("--------------------------------------------------------------------------------------------------------------------------").append("\n");
    sb.append("Name: ")
      .append(getUser().getName()).append("\n");
    sb.append("Telephone: ")
      .append(getUser().getTelephone()).append("\n");
    sb.append("Email: ")
      .append(getUser().getEmail()).append("\n");
    sb.append("Shipping address: ")
      .append(getAddress().getStreet())
      .append(", ")
      .append(getAddress().getCity())
      .append(", ")
      .append(getAddress().getCountry())
      .append(", ")
      .append(getAddress().getPostCode())
      .append("\n");
    sb.append("\n");

    sb.append("Delivery Information").append("\n");
    sb.append("--------------------------------------------------------------------------------------------------------------------------").append("\n");
    sb.append(getDelivery().getName())
      .append(" - ")
      .append(getDelivery().getDays())
      .append(" day(s) $")
      .append(getDelivery().getPrice())
      .append("\n");
    sb.append("\n");

    sb.append("Total Amount Paid").append("\n");
    sb.append("--------------------------------------------------------------------------------------------------------------------------").append("\n");
    sb.append("$")
      .append(getTotalOrderPrice())
      .append("\n");
    sb.append("\n");

    return sb.toString();
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

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

  public String getReference() {
    return reference;
  }

  public void setReference(String reference) {
    this.reference = reference;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Discount getDiscount() {
    return discount;
  }

  public void setDiscount(Discount discount) {
    this.discount = discount;
  }
}
