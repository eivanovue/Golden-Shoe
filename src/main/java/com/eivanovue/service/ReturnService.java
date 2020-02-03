package com.eivanovue.service;

import com.eivanovue.model.Return;

public interface ReturnService {
  Iterable<Return> getAllReturns();

  Return getReturn(long id);

  boolean getReturnByOrderReference(String reference);

  Return getReturnByReference(String reference);

  void createReturn(Return aReturn);

  String generateReference();

  void sendEmail(Return aReturn);

  void cancelReturnByReference(String reference);

  void approveReturnByReference(String reference);
}
