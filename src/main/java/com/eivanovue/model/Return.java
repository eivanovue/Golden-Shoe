package com.eivanovue.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(indexes = { @Index(name = "IDX_MYIDX3", columnList = "reference") })
public class Return {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String reference;

    @OneToMany
    @JoinColumn(name = "return_product_id")
    private List<ReturnProduct> returnProducts;

    private String status;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime dateCreated;

    private User user;

    private Address address;

    private double amount;

    private String orderReference;

    public Return() {
    }

    public Return(String reference,
                  @Valid List<ReturnProduct> returnProducts,
                  User user, Address address,
                  double amount,
                  String orderReference) {
        this.reference = reference;
        this.returnProducts = returnProducts;
        this.user = user;
        this.address = address;
        this.amount = amount;
        this.status = "PENDING";
        this.dateCreated = LocalDateTime.now();
        this.orderReference = orderReference;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<ReturnProduct> getReturnProducts() {
        return returnProducts;
    }

    public void setReturnProducts(List<ReturnProduct> returnProducts) {
        this.returnProducts = returnProducts;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getOrderReference() {
        return orderReference;
    }

    public void setOrderReference(String orderReference) {
        this.orderReference = orderReference;
    }
}
