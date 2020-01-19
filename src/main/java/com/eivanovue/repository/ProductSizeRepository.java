package com.eivanovue.repository;

import com.eivanovue.model.ProductSize;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductSizeRepository extends CrudRepository<ProductSize, Long> {
}
