package com.eivanovue.controller;

import com.eivanovue.model.Discount;
import com.eivanovue.service.DiscountService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/discounts")
public class DiscountController {
  private final DiscountService discountService;

  public DiscountController(DiscountService discountService) {
    this.discountService = discountService;
  }

  @GetMapping(value = {"", "/"})
  public @NotNull Discount getDiscount(@RequestParam String voucher) {
    return discountService.getDiscountByVoucher(voucher);
  }

  @GetMapping(value = {"check", "/check"})
  public @NotNull boolean checkDiscount(@RequestParam String voucher) {
    return discountService.checkDiscount(voucher.toUpperCase());
  }
}
