package com.eivanovue.repository;

import com.eivanovue.model.Return;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReturnRepository extends CrudRepository<Return, Long> {
    Optional<Return> getByOrderReference(String reference);
    Optional<Return> findByReference(String reference);
    boolean existsByOrderReferenceAndStatusEquals(String reference, String status);
}
