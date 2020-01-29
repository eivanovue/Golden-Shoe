package com.eivanovue.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(indexes = { @Index(name = "IDX_MYIDX2", columnList = "voucher") })
public class Discount {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;


  @NotNull(message = "Voucher is required.")
  @Column(unique=true)

  private String voucher;

  @NotNull(message = "Expiry date is required.")
  private LocalDateTime expiry;

  private boolean expired;

  @NotNull(message = "Value is required")
  private double value;

  public Discount() {
  }

  public Discount(@NotNull(message = "Voucher is required.") String voucher, @NotNull(message = "Expiry date is required.") LocalDateTime expiry, @NotNull(message = "Value is required") double value) {
    this.voucher = voucher.toUpperCase();
    this.expiry = expiry;
    this.expired = !expiry.isAfter(LocalDateTime.now());
    this.value = value;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getVoucher() {
    return voucher;
  }

  public void setVoucher(String voucher) {
    this.voucher = voucher;
  }

  public LocalDateTime getExpiry() {
    return expiry;
  }

  public void setExpiry(LocalDateTime expiry) {
    this.expiry = expiry;
  }

  public boolean isExpired() {
    return expired;
  }

  public void setExpired(boolean expired) {
    this.expired = expired;
  }

  public double getValue() {
    return value;
  }

  public void setValue(double value) {
    this.value = value;
  }
}
