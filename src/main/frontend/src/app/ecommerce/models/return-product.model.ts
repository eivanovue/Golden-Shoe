import {ProductSize} from "./product-size.model";
import {Product} from "./product.model";

export class ReturnProduct {
  product: Product;
  productSize: ProductSize;
  quantityToReturn: number;

  constructor(product: Product, productSize: ProductSize, quantityToReturn: number) {
    this.product = product;
    this.productSize = productSize;
    this.quantityToReturn = quantityToReturn;
  }
}
