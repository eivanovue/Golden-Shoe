package com.eivanovue.service;

import com.eivanovue.model.ReturnProduct;

public interface ReturnProductService {
  ReturnProduct createReturnProduct(ReturnProduct returnProduct);

  ReturnProduct getReturnProduct(long id);

}
