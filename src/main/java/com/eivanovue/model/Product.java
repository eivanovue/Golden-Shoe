package com.eivanovue.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @NotNull(message = "Product name is required.")
  @Basic(optional = false)
  private String name;

  private double price;

  @NotNull(message = "Product size is required.")
  @OneToMany(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_size_id")
  private List<ProductSize> productSize = new ArrayList<>();

  @NotNull(message = "Product type is required.")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_type_id")
  private ProductType productType;

  private String pictureUrl;

  public Product() {
  }

  public Product(@NotNull(message = "Product name is required.") String name,
                 double price,
                 List<ProductSize> productSize,
                 ProductType productType,
                 String pictureUrl) {
    this.name = name;
    this.price = price;
    this.productSize = productSize;
    this.productType = productType;
    this.pictureUrl = pictureUrl;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public List<ProductSize> getProductSize() {
    return productSize;
  }

  public void setProductSize(List<ProductSize> productSize) {
    this.productSize = productSize;
  }

  public String getPictureUrl() {
    return pictureUrl;
  }

  public void setPictureUrl(String pictureUrl) {
    this.pictureUrl = pictureUrl;
  }

  public ProductType getProductType() {
    return productType;
  }

  public void setProductType(ProductType productType) {
    this.productType = productType;
  }
}
