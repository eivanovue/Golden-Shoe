import {Product} from "./product.model";
import {ProductSize} from "./product-size.model";

export class ProductOrder {
  product: Product;
  productSize: ProductSize = null;
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

  setProductSize() {
    if (this.productSize) {
      this.size = this.productSize;
    } else {
      this.size = this.productSize
    }
  }
}
