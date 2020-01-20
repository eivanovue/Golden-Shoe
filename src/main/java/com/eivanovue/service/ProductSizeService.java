package com.eivanovue.service;

import com.eivanovue.model.ProductSize;

public interface ProductSizeService {

  Iterable<ProductSize> getAllProductsSizes();

  ProductSize getProductSize(long id);

  ProductSize save(ProductSize product);
}
