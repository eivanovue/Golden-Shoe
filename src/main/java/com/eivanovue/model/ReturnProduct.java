package com.eivanovue.model;

import javax.persistence.*;

@Entity
public class ReturnProduct {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "product_id")
  private Product product;

  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "product_size_id")
  private ProductSize productSize;

  private Integer quantityToReturn;

  public ReturnProduct(Product product, ProductSize productSize, Integer quantityToReturn) {
    this.product = product;
    this.productSize = productSize;
    this.quantityToReturn = quantityToReturn;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public Product getProduct() {
    return product;
  }

  public void setProduct(Product product) {
    this.product = product;
  }

  public ProductSize getProductSize() {
    return productSize;
  }

  public void setProductSize(ProductSize productSize) {
    this.productSize = productSize;
  }

  public Integer getQuantityToReturn() {
    return quantityToReturn;
  }

  public void setQuantityToReturn(Integer quantityToReturn) {
    this.quantityToReturn = quantityToReturn;
  }
}
