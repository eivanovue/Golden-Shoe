package com.eivanovue.model;

import javax.persistence.Embeddable;

@Embeddable
public class Address {
  private String street;
  private String city;
  private String country;
  private String postCode;

  public Address() {
  }

  public Address(String firstLineOfAddress, String city, String country, String postCode) {
    this.street = firstLineOfAddress;
    this.city = city;
    this.country = country;
    this.postCode = postCode;
  }


  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getPostCode() {
    return postCode;
  }

  public void setPostCode(String postCode) {
    this.postCode = postCode;
  }
}
