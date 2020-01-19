import {Product} from "./product.model";
import {ProductSize} from "./product-size.model";

export class ProductOrder {
  product: Product;
  private productSize: ProductSize;
  quantity: number;

  constructor(product: Product, quantity: number, productSize?: ProductSize) {
    this.product = product;
    this.quantity = quantity;
    if(productSize){
      this.productSize = productSize;
    }
  }

  get size(): ProductSize {
    return this.productSize;
  }

  set size(value: ProductSize) {
    this.productSize = value;
  }
}
