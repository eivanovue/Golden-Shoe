package com.eivanovue;

import com.eivanovue.data.DataImport;
import com.eivanovue.service.DeliveryService;
import com.eivanovue.service.ProductService;
import com.eivanovue.service.ProductSizeService;
import com.eivanovue.service.ProductTypeService;
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
	CommandLineRunner runner(ProductService productService,
													 ProductSizeService productSizeService,
													 ProductTypeService productTypeService,
													 DeliveryService deliveryService) {
		return args -> {
			DataImport dataImport = new DataImport();
			dataImport.addDelivery(deliveryService);
			dataImport.addProductsType(productTypeService);
			dataImport.addProducts(productService, productSizeService, productTypeService);


		};
	}
}
