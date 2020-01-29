package com.eivanovue.service;

import com.eivanovue.model.Discount;
import com.eivanovue.model.Return;
import com.eivanovue.repository.ReturnRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ReturnServiceImpl implements ReturnService {
    private final ReturnRepository returnRepository;

    public ReturnServiceImpl(ReturnRepository returnRepository) {
        this.returnRepository = returnRepository;
    }

    @Override
    public Iterable<Return> getAllReturns() {
        return returnRepository.findAll();
    }

    @Override
    public Return getReturn(long id) {
        return returnRepository
          .findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Return not found"));
    }

    @Override
    public Return getReturnByReference(String reference){
        return returnRepository
          .findByReference(reference)
          .orElseThrow(() -> new ResourceNotFoundException("Return not found."));
    }

    @Override
    public void createReturn(Return aReturn){
        returnRepository.save(aReturn);
    }
}
