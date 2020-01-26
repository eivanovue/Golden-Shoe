package com.eivanovue.data;

import com.eivanovue.model.Delivery;
import com.eivanovue.model.Product;
import com.eivanovue.model.ProductSize;
import com.eivanovue.model.ProductType;
import com.eivanovue.service.DeliveryService;
import com.eivanovue.service.ProductService;
import com.eivanovue.service.ProductSizeService;
import com.eivanovue.service.ProductTypeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicReference;

public class DataImport {



  public void addDelivery(DeliveryService deliveryService){
    Delivery delivery1 = new Delivery("Standard Delivery", 5, 0);
    Delivery delivery2 = new Delivery("Fast Delivery", 2, 2.99);
    Delivery delivery3 = new Delivery("Express Delivery", 1, 4.99);

    deliveryService.save(delivery1);
    deliveryService.save(delivery2);
    deliveryService.save(delivery3);
  }

  private List<ProductSize> addProductSize(ProductSizeService productSizeService){
    List<ProductSize> productSizes = new ArrayList<>();
    Random random = new Random();
    int rand;
    ProductSize temp;

    for(int i = 6; i <= 15; i++){
      rand = random.nextInt(100);
      temp = new ProductSize(i, rand);
      productSizeService.save(temp);
      productSizes.add(temp);
    }
    return productSizes;
  }

  public void addProductsType(ProductTypeService productTypeService){
    String[] productTypes = new String[]
      {
      "Ankle boots",
      "Boat shoes",
      "Brogues",
      "Chelsea boots",
      "Derby shoe",
      "Flat sandals",
      "Loafers & Slip ons",
      "Oxford shoes",
      "T Bar shoes",
      "Trainers"};

    ProductType temp;

    for (String productType : productTypes) {
      temp = new ProductType(productType);
      productTypeService.save(temp);
    }
  }

  public void addProducts(ProductService productService,
                          ProductSizeService productSizeService,
                          ProductTypeService productTypeService){

    List<Products> products = addProductsInfo(productTypeService);

    Product product;

    for(Products prod : products){
      product = new Product(
        prod.name,
        prod.price,
        addProductSize(productSizeService),
        prod.productType,
        prod.pictureUrl
      );
      productService.save(product);
    }

  }

  private List<Products> addProductsInfo(ProductTypeService productTypeService){
    List<Products> products = new ArrayList<>();
    Products products1 = new Products("Stanford Zip", 85.00, productTypeService.getProductType(1), "https://eivanovue.com/shoes/images/mens/ankleboots/ankleboots1.png");
    Products products2 = new Products("Vargo Mid", 69.00, productTypeService.getProductType(1), "https://eivanovue.com/shoes/images/mens/ankleboots/ankleboots2.png");
    Products products3 = new Products("Wallabee Hike", 200.00, productTypeService.getProductType(1), "https://eivanovue.com/shoes/images/mens/ankleboots/ankleboots3.png");

    Products products4 = new Products("Step Isle Base", 55.00, productTypeService.getProductType(2), "https://eivanovue.com/shoes/images/mens/boatshoes/boatshoes1.png");
    Products products5 = new Products("Orson Harbour", 85.00, productTypeService.getProductType(2), "https://eivanovue.com/shoes/images/mens/boatshoes/boatshoes2.png");
    Products products6 = new Products("Orson Harbour", 85.00, productTypeService.getProductType(2), "https://eivanovue.com/shoes/images/mens/boatshoes/boatshoes3.png");
    Products products7 = new Products("Step Isle Base", 55.00, productTypeService.getProductType(2), "https://eivanovue.com/shoes/images/mens/boatshoes/boatshoes4.png");

    Products products8 = new Products("Batcombe Wing", 79.00, productTypeService.getProductType(3), "https://eivanovue.com/shoes/images/mens/brogues/brogues1.png");
    Products products9 = new Products("Helston Limit", 79.00, productTypeService.getProductType(3), "https://eivanovue.com/shoes/images/mens/brogues/brogues2.png");

    Products products10 = new Products("Stanford Top", 85.00, productTypeService.getProductType(4), "https://eivanovue.com/shoes/images/mens/chelseaboots/chelseaboots1.png");

    Products products11 = new Products("Tilden Walk", 59.00, productTypeService.getProductType(5), "https://eivanovue.com/shoes/images/mens/derbyshoe/derbyshoe1.png");
    Products products12 = new Products("Becken Cap", 59.00, productTypeService.getProductType(5), "https://eivanovue.com/shoes/images/mens/derbyshoe/derbyshoe2.png");
    Products products13 = new Products("Vargo Vibe", 59.00, productTypeService.getProductType(5), "https://eivanovue.com/shoes/images/mens/derbyshoe/derbyshoe3.png");
    Products products14 = new Products("Batcombe Hall", 79.00, productTypeService.getProductType(5), "https://eivanovue.com/shoes/images/mens/derbyshoe/derbyshoe4.png");
    Products products15 = new Products("Cotrell Lane", 59.00, productTypeService.getProductType(5), "https://eivanovue.com/shoes/images/mens/derbyshoe/derbyshoe5.png");

    Products products16 = new Products("Brixby Shore", 59.00, productTypeService.getProductType(6), "https://eivanovue.com/shoes/images/mens/flatsandals/flatsandals1.png");
    Products products17 = new Products("Recline Open", 69.00, productTypeService.getProductType(6), "https://eivanovue.com/shoes/images/mens/flatsandals/flatsandals2.png");

    Products products18 = new Products("Batcombe Edge", 79.00, productTypeService.getProductType(7), "https://eivanovue.com/shoes/images/mens/loafers/loafers1.png");
    Products products19 = new Products("Batcombe Sail", 79.00, productTypeService.getProductType(7), "https://eivanovue.com/shoes/images/mens/loafers/loafers2.png");
    Products products20 = new Products("Un Aldric Step", 79.00, productTypeService.getProductType(7), "https://eivanovue.com/shoes/images/mens/loafers/loafers3.png");
    Products products21 = new Products("Morven Sun", 59.00, productTypeService.getProductType(7), "https://eivanovue.com/shoes/images/mens/loafers/loafers4.png");

    Products products22 = new Products("Oliver Limit", 99.00, productTypeService.getProductType(8), "https://eivanovue.com/shoes/images/mens/oxfordshoes/oxfordshoes1.png");
    Products products23 = new Products("Oliver Limit", 99.00, productTypeService.getProductType(8), "https://eivanovue.com/shoes/images/mens/oxfordshoes/oxfordshoes2.png");

    Products products24 = new Products("Francis Air", 69.00, productTypeService.getProductType(9), "https://eivanovue.com/shoes/images/mens/tbarshoes/tbarshoes1.png");

    Products products25 = new Products("Sift Speed", 79.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers1.png");
    Products products26 = new Products("Sift Speed", 79.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers2.png");
    Products products27 = new Products("Kiowa Pace", 95.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers3.png");
    Products products28 = new Products("CLR 51.N", 89.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers4.png");
    Products products29 = new Products("Stanway Lace", 59.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers5.png");
    Products products30 = new Products("CLR 52N Lo Gore-T", 89.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers6.png");
    Products products31 = new Products("Kiowa Pace", 95.00, productTypeService.getProductType(10), "https://eivanovue.com/shoes/images/mens/trainers/trainers7.png");

    products.add(products1);
    products.add(products2);
    products.add(products3);
    products.add(products4);
    products.add(products5);
    products.add(products6);
    products.add(products7);
    products.add(products8);
    products.add(products9);
    products.add(products10);
    products.add(products11);
    products.add(products12);
    products.add(products13);
    products.add(products14);
    products.add(products15);
    products.add(products16);
    products.add(products17);
    products.add(products18);
    products.add(products19);
    products.add(products20);
    products.add(products21);
    products.add(products22);
    products.add(products23);
    products.add(products24);
    products.add(products25);
    products.add(products26);
    products.add(products27);
    products.add(products28);
    products.add(products29);
    products.add(products30);
    products.add(products31);

    return products;
  }

}

class Products {
  public String name;
  public double price;
  public ProductType productType;
  public String pictureUrl;

  public Products(String name, double price, ProductType productType, String pictureUrl) {
    this.name = name;
    this.price = price;
    this.productType = productType;
    this.pictureUrl = pictureUrl;
  }
}
