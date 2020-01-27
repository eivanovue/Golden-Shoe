package com.eivanovue.repository;

import com.eivanovue.model.Discount;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiscountRepository extends CrudRepository<Discount, Long> {
  Optional<Discount> findByVoucher(String voucher);
  boolean existsByVoucherAndExpiredIsFalse(String voucher);
}
