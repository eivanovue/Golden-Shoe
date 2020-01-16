package com.eivanovue;

import com.eivanovue.model.Product;
import com.eivanovue.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService) {
		return args -> {
			productService.save(new Product("Nike Air Force 1x", 74.99, ""));
			productService.save(new Product("Nike Air Force 7x", 43.99, ""));
		};
	}
}
