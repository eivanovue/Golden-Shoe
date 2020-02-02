package com.eivanovue.service;

import com.eivanovue.model.ReturnProduct;
import com.eivanovue.repository.ReturnProductRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ReturnProductServiceImpl implements ReturnProductService {

  private final ReturnProductRepository returnProductRepository;

  public ReturnProductServiceImpl(ReturnProductRepository returnProductRepository) {
    this.returnProductRepository = returnProductRepository;
  }

  @Override
  public ReturnProduct createReturnProduct(ReturnProduct returnProduct){
    return this.returnProductRepository.save(returnProduct);
  }

  @Override
  public ReturnProduct getReturnProduct(long id){
    return this.returnProductRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Return product not found"));
  }

}
