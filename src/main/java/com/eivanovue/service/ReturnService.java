package com.eivanovue.service;

import com.eivanovue.model.Return;

public interface ReturnService {
  Iterable<Return> getAllReturns();

  Return getReturn(long id);

  Return getReturnByReference(String reference);

  void createReturn(Return aReturn);

  String generateReference();
}
