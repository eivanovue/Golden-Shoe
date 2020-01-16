package com.eivanovue.repository;

import com.eivanovue.model.OrderProduct;
import com.eivanovue.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
