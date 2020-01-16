package com.eivanovue.service;

import com.eivanovue.model.Product;
import com.eivanovue.repository.ProductRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

  private final ProductRepository productRepository;

  public ProductServiceImpl(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @Override
  public Iterable<Product> getAllProducts() {
    return productRepository.findAll();
  }

  @Override
  public Product getProduct(long id) {
    return productRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
  }

  @Override
  public Product save(Product product) {
    return productRepository.save(product);
  }
}