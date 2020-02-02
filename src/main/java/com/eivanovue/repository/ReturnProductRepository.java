package com.eivanovue.repository;

import com.eivanovue.model.ReturnProduct;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReturnProductRepository extends CrudRepository<ReturnProduct, Long> {
}
