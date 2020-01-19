package com.eivanovue.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class ProductSize {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @NotNull(message = "Product size is required.")
  private
  Integer size;

  @NotNull(message = "Product size stock is required.")
  private
  Integer stock;

  public ProductSize() {
  }

  public ProductSize(@NotNull(message = "Prodct size is required.") Integer size, @NotNull(message = "Product size stock is required.") Integer stock) {
    this.size = size;
    this.stock = stock;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public Integer getStock() {
    return stock;
  }

  public void setStock(Integer stock) {
    this.stock = stock;
  }
}
