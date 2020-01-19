package com.eivanovue.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class OrderProduct {

  @EmbeddedId
  @JsonIgnore
  private OrderProductPK pk;

  @Column(nullable = false)
  private Integer quantity;

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "product_size_id")
  private ProductSize productSize;

  public OrderProduct() {}

  public OrderProduct(Order order, Product product, Integer quantity, ProductSize productSize) {
    this.productSize = productSize;
    pk = new OrderProductPK();
    pk.setOrder(order);
    pk.setProduct(product);
    this.quantity = quantity;
  }

  @Transient
  private Product getProduct(){
    return this.pk.getProduct();
  }

  @Transient
  Double getTotalPrice() {
    return getProduct().getPrice() * getQuantity();
  }

  public OrderProductPK getPk() {
    return pk;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    OrderProduct that = (OrderProduct) o;
    return Objects.equals(pk, that.pk) &&
      Objects.equals(quantity, that.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pk, quantity);
  }

  public void setPk(OrderProductPK pk) {
    this.pk = pk;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public ProductSize getProductSize() {
    return productSize;
  }

  public void setProductSize(ProductSize productSize) {
    this.productSize = productSize;
  }
}
