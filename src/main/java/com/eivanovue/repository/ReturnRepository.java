package com.eivanovue.repository;

import com.eivanovue.model.Return;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReturnRepository extends CrudRepository<Return, Long> {
    Optional<Return> getByOrderReference(String reference);
    Optional<Return> findByReference(String reference);
    boolean existsByOrderReferenceAndStatusEqualsOrOrderReferenceAndStatusEquals(String reference, String status, String reference2, String status2);
}
