package com.eivanovue.service;

  import com.eivanovue.model.ProductSize;
  import com.eivanovue.repository.ProductSizeRepository;
  import org.apache.velocity.exception.ResourceNotFoundException;
  import org.springframework.stereotype.Service;

  import javax.transaction.Transactional;

@Service
@Transactional
public class ProductSizeServiceImpl implements ProductSizeService {

  private final ProductSizeRepository productSizeRepository;

  public ProductSizeServiceImpl(ProductSizeRepository productSizeRepository) {
    this.productSizeRepository = productSizeRepository;
  }

  @Override
  public Iterable<ProductSize> getAllProductsSizes() {
    return productSizeRepository.findAll();
  }

  @Override
  public ProductSize getProductSize(long id) {
    return productSizeRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Product size not found"));
  }

  @Override
  public ProductSize save(ProductSize product) {
    return productSizeRepository.save(product);
  }
}
