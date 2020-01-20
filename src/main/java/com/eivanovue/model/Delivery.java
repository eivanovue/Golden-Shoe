package com.eivanovue.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Delivery {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @NotNull(message = "Delivery name is required.")
  private String name;

  @NotNull(message = "Days for delivery are required.")
  private int days;

  public Delivery() {}

  public Delivery(@NotNull(message = "Delivery name is required.") String name, @NotNull(message = "Days for delivery are required.") int days) {
    this.name = name;
    this.days = days;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getDays() {
    return days;
  }

  public void setDays(int days) {
    this.days = days;
  }
}
