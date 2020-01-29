package com.eivanovue;

import com.eivanovue.data.DataImport;
import com.eivanovue.service.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService,
													 ProductSizeService productSizeService,
													 ProductTypeService productTypeService,
													 DeliveryService deliveryService,
													 DiscountService discountService) {
		return args -> {
			DataImport dataImport = new DataImport();
			dataImport.addDiscounts(discountService);
			dataImport.addDelivery(deliveryService);
			dataImport.addProductsType(productTypeService);
			dataImport.addProducts(productService, productSizeService, productTypeService);


		};
	}
}
