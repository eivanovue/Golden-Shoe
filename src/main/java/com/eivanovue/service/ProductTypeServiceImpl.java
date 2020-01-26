package com.eivanovue.service;

import com.eivanovue.model.ProductType;
import com.eivanovue.repository.ProductTypeRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductTypeServiceImpl implements ProductTypeService {

  private final ProductTypeRepository productTypeRepository;

  public ProductTypeServiceImpl(ProductTypeRepository productTypeRepository) {
    this.productTypeRepository = productTypeRepository;
  }

  @Override
  public Iterable<ProductType> getAllProductsSizes() {
    return productTypeRepository.findAll();
  }

  @Override
  public ProductType getProductType(long id) {
    return productTypeRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Product type not found"));
  }

  @Override
  public ProductType save(ProductType product) {
    return productTypeRepository.save(product);
  }
}
