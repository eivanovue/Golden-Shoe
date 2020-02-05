package com.eivanovue.service;

import com.eivanovue.model.Return;
import com.eivanovue.repository.ReturnRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Transactional
public class ReturnServiceImpl implements ReturnService {
    private final ReturnRepository returnRepository;
    private final EmailService emailService;
    AtomicInteger seq = new AtomicInteger();

    public ReturnServiceImpl(ReturnRepository returnRepository, EmailService emailService) {
        this.returnRepository = returnRepository;
        this.emailService = emailService;
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
    public boolean getReturnByOrderReference(String reference){
        return returnRepository
          .existsByOrderReferenceAndStatusEqualsOrOrderReferenceAndStatusEquals(reference, "PENDING", reference, "APPROVED");
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

    @Override
    public String generateReference(){
        return "RETURN" + LocalDateTime.now().getYear() + seq.incrementAndGet();
    }

    @Override
    public void sendEmail(Return aReturn) {
        String message =
          "Dear " + aReturn.getUser().getName() + ", \n\n" +
          "Your return request has been submitted. Thank you for using our platform. You can view the status of the" +
            "return request by taking a note of the reference provided bellow. Simply navigate to the returns section of" +
            "the support web page and enter this reference number:" +
            "\n" +
            aReturn.getReference() +
            "\n \n" +
            "Kind Regards, \n" +
            "Golden Shoe Team";

        emailService.sendSimpleMessage(
          aReturn.getUser().getEmail(),
          "Return Request - " + aReturn.getReference(),
          message);
    }

    @Override
    public void cancelReturnByReference(String reference) {
        Return aReturn = getReturnByReference(reference);
        aReturn.setStatus("CANCELED");
        returnRepository.save(aReturn);
    }

    @Override
    public void approveReturnByReference(String reference) {
        Return aReturn = getReturnByReference(reference);
        aReturn.setStatus("APPROVED");
        returnRepository.save(aReturn);
    }
}
