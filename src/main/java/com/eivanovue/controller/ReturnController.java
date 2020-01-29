package com.eivanovue.controller;

import com.eivanovue.model.Return;
import com.eivanovue.service.ReturnService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/returns")
public class ReturnController {
  private final ReturnService returnService;

  public ReturnController(ReturnService returnService) {
    this.returnService = returnService;
  }

  @GetMapping
  public Return get(@RequestParam String reference){
    return returnService.getReturnByReference(reference);
  }

  @PostMapping
  public ResponseEntity<Return> create(@RequestBody ReturnForm form) {
    Return aReturn = new Return();
    //form logic
    returnService.createReturn(aReturn);
    return null;
  }


}

class ReturnForm {

}