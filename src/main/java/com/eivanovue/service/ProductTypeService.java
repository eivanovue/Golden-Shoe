package com.eivanovue.service;

import com.eivanovue.model.ProductType;

public interface ProductTypeService {

  Iterable<ProductType> getAllProductsSizes();

  ProductType getProductType(long id);

  ProductType save(ProductType product);
}
