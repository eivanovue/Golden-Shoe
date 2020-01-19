package com.eivanovue;

import com.eivanovue.model.Product;
import com.eivanovue.model.ProductSize;
import com.eivanovue.service.ProductService;
import com.eivanovue.service.ProductSizeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService, ProductSizeService productSizeService) {
		return args -> {
			Product prod1 = new Product("Smarties Luchen", 74.99, 15, "https://www.samuel-windsor.co.uk/images/products/zoom/z-F-BV3.jpg");
			ProductSize prod1size11 = new ProductSize(11, 10);
			ProductSize prod1size10 = new ProductSize(10, 12);

			productSizeService.save(prod1size11);
			productSizeService.save(prod1size10);

			List<ProductSize> product1Sizes = new ArrayList<>();
			product1Sizes.add(prod1size10);
			product1Sizes.add(prod1size11);

			prod1.setProductSize(product1Sizes);
			productService.save(prod1);

			Product prod2 = new Product("Nike Air Force 1x", 75.99, 15, "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2P2hybBQrv4wdXHVLGVJRbmYVYv5--bvAH3ybDvKUzyidSAw2S4po4eMjPz4vo2ALxy3JStWKbg&usqp=CAY");
			ProductSize prod2size8 = new ProductSize(8, 12);
			ProductSize prod2size10 = new ProductSize(10, 9);

			productSizeService.save(prod2size8);
			productSizeService.save(prod2size10);

			List<ProductSize>  product2Sizes = new ArrayList<>();



			product2Sizes.add(prod2size8);
			product2Sizes.add(prod2size10);

			prod2.setProductSize(product2Sizes);
			productService.save(prod2);

		};
	}
}
