package com.eivanovue.service;

import com.eivanovue.model.Discount;
import com.eivanovue.repository.DiscountRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DiscountServiceImpl implements DiscountService {

  private final DiscountRepository discountRepository;

  public DiscountServiceImpl(DiscountRepository discountRepository) {
    this.discountRepository = discountRepository;
  }

  @Override
  public Iterable<Discount> getAllDiscounts() {
    return discountRepository.findAll();
  }

  @Override
  public Discount getDiscount(long id) {
    return discountRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Discount not found"));
  }

  @Override
  public Discount getDiscountByVoucher(String voucher) {
    return discountRepository
      .findByVoucher(voucher)
      .orElseThrow(() -> new ResourceNotFoundException("Discount not found"));
  }

  @Override
  public boolean checkDiscount(String voucher){
    return discountRepository
      .existsByVoucherAndExpiredIsFalse(voucher);
  }

  @Override
  public void useDiscount(String voucher){
    Discount discount = discountRepository
      .findByVoucher(voucher)
      .orElseThrow(() -> new ResourceNotFoundException("Discount not found"));
    discount.setExpired(true);
  }

  @Override
  public Discount save(Discount delivery) {
    return discountRepository.save(delivery);
  }

}
