package com.eivanovue.controller;

import com.eivanovue.dto.ReturnForm;
import com.eivanovue.model.Return;
import com.eivanovue.model.ReturnProduct;
import com.eivanovue.service.ReturnProductService;
import com.eivanovue.service.ReturnService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/api/returns")
public class ReturnController {
  private final ReturnService returnService;
  private final ReturnProductService returnProductService;

  public ReturnController(ReturnService returnService, ReturnProductService returnProductService) {
    this.returnService = returnService;
    this.returnProductService = returnProductService;
  }

  @GetMapping
  public Return get(@RequestParam String reference){
    return returnService.getReturnByReference(reference);
  }

  @GetMapping(value = {"check", "/check"})
  public @NotNull boolean checkReturn(@RequestParam String reference) {
    return returnService.getReturnByOrderReference(reference);
  }

  @PostMapping
  public ResponseEntity<Return> create(@RequestBody ReturnForm form) {
    List<ReturnProduct> returnProductList = form.getReturnProducts();
    returnProductList.forEach(this.returnProductService::createReturnProduct);
    Return aReturn = new Return(
      returnService.generateReference(),
      form.getReturnProducts(),
      form.getUser(),
      form.getAddress(),
      form.getAmount(),
      form.getOrderReference()
    );

    this.returnService.createReturn(aReturn);
    this.returnService.sendEmail(aReturn);

    String uri = ServletUriComponentsBuilder
      .fromCurrentServletMapping()
      .path("/returns/{id}")
      .buildAndExpand(aReturn.getId())
      .toString();
    HttpHeaders headers = new HttpHeaders();
    headers.add("Location", uri);

    return new ResponseEntity<>(aReturn, headers, HttpStatus.CREATED);
  }

  @PostMapping(value = {"cancel", "/cancel"})
  public @NotNull void cancelReturn(@RequestParam String reference) {
    returnService.cancelReturnByReference(reference);
  }
  @PostMapping(value = {"approve", "/approve"})
  public @NotNull void approveReturn(@RequestParam String reference) {
    returnService.approveReturnByReference(reference);
  }
}
