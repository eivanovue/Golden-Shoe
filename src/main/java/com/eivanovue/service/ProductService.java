package com.eivanovue.service;

import com.eivanovue.model.Product;

public interface ProductService {
  Iterable<Product> getAllProducts();

  Product getProduct(long id);

  Product save(Product product);
}
