package com.eivanovue.service;

import com.eivanovue.model.Discount;

public interface DiscountService {
  Iterable<Discount> getAllDiscounts();

  Discount getDiscount(long id);

  Discount getDiscountByVoucher(String voucher);

  boolean checkDiscount(String voucher);

  void useDiscount(String voucher);

  Discount save(Discount delivery);
}
