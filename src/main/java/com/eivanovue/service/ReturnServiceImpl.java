package com.eivanovue.service;

import com.eivanovue.repository.ReturnRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ReturnServiceImpl implements ReturnService {
    private final ReturnRepository returnRepository;

    public ReturnServiceImpl(ReturnRepository returnRepository) {
        this.returnRepository = returnRepository;
    }
}
