package com.eivanovue.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Return {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String reference;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "discount_id")
    private Order order;

    @JsonManagedReference
    @OneToMany(mappedBy = "pk.order")
    @Valid
    private List<OrderProduct> orderProduct;

    private String status;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime dateCreated;

    public Return() {
    }

    public Return(String reference, Order order, @Valid List<OrderProduct> orderProduct, String status, LocalDateTime dateCreated) {
        this.reference = reference;
        this.order = order;
        this.orderProduct = orderProduct;
        this.status = status;
        this.dateCreated = dateCreated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public List<OrderProduct> getOrderProduct() {
        return orderProduct;
    }

    public void setOrderProduct(List<OrderProduct> orderProduct) {
        this.orderProduct = orderProduct;
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
}
