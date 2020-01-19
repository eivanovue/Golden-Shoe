import {ProductSize} from "./product-size.model";

export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  productSize: ProductSize[];
  pictureUrl: string;

  constructor(id: number, name: string, price: number, stock: number, productSize: ProductSize[], pictureUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.productSize = productSize;
    this.pictureUrl = pictureUrl;
  }
}
