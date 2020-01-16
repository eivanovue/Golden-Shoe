package com.eivanovue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

  @GetMapping("/api/foos")
  @ResponseBody
  public String getFoos(@RequestParam int id) {
    return "ID: " + id;
  }
}
