package com.eivanovue.dto;

import com.eivanovue.model.Product;
import com.eivanovue.model.ProductSize;

public class OrderProductDto {
  private Product product;
  private Integer quantity;
  private ProductSize productSize;

  public Product getProduct() {
    return product;
  }

  public void setProduct(Product product) {
    this.product = product;
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
