package com.eivanovue.controller;

import com.eivanovue.model.Product;
import com.eivanovue.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

  private final ProductService productService;

  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  @GetMapping(value = {"", "/"})
  public @NotNull Iterable<Product> getProducts() {
    return productService.getAllProducts();
  }
}
