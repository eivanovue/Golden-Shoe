import { Component, OnInit } from '@angular/core';
import {EcommerceService} from "../../services/EcommerceService";
import {ProductOrders} from "../../models/product-orders.model";
import {ReturnS} from "../../models/return.model";
import {ReturnProduct} from "../../models/return-product.model";

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  orderReference: string;
  customerEmail: string;
  errOrderNotFound: boolean = false;
  orders: ProductOrders = new ProductOrders();
  returnProducts: any = [];
  productsToReturn: ReturnProduct[] = [];
  refund: number;
  aReturn: ReturnS;
  returnRequestFinished: boolean = false;

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
  }

  async getOrder() {
    await this.ecommerceService.getOrderReturn(this.orderReference).then(order => {
      // @ts-ignore
      this.orders.productOrders = order.productOrders;
      // @ts-ignore
      this.orders.discount = order.discount;
      // @ts-ignore
      this.orders.address = order.address;
      // @ts-ignore
      this.orders.user = order.user;
      // @ts-ignore
      this.orders.delivery = order.delivery;
      // @ts-ignore
      this.orders.reference = order.reference;

      this.returnProducts = [];
      this.errOrderNotFound = false;
      this.orders.productOrders.forEach(item => {
        this.returnProducts.push(
          {
            'checked': false,
            // @ts-ignore
            'product': item.pk.product,
            'size': item.productSize,
            'quantity': item.quantity,
            'quantityToReturn': 1});
      })
    }).catch( err => {
        this.errOrderNotFound = true;
    });
    // @ts-ignore
    console.log(this.returnProducts);
  }

  decrementQuantity(product) {
    if(product.quantityToReturn != 1){
      product.quantityToReturn--;
    }
  }

  incrementQuantity(product) {
    if(product.quantityToReturn == product.quantity){

    } else {
      product.quantityToReturn++;
    }
  }

  createReturnRequest() {
    //create the objects
    this.productsToReturn = [];
    Array.from(this.returnProducts).forEach(rtnProduct => {
      // @ts-ignore
      if(rtnProduct.checked){
        // @ts-ignore
        this.productsToReturn.push(new ReturnProduct(rtnProduct.product, rtnProduct.size, rtnProduct.quantityToReturn));
      }
    });
    if(this.orders.discount){
      console.log(this.productsToReturn);
      this.refund = this.findRefunSum() - this.orders.discount.value;
    } else{
      this.refund = this.findRefunSum();

    }

    let rtn = new ReturnS(this.productsToReturn, this.orders.user, this.orders.address, this.refund, this.orders.reference);
    this.returnRequestFinished = true;
    console.log(rtn);
    this.ecommerceService.saveReturn(rtn).subscribe();
    }

    findRefunSum(){
      let sum = 0;
      this.productsToReturn.forEach(item => {
        sum += item.product.price * item.quantityToReturn;
      });
      return sum;
    }

}
