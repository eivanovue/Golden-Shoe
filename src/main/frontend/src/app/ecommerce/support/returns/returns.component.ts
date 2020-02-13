import { Component, OnInit } from '@angular/core';
import {EcommerceService} from "../../services/EcommerceService";
import {ProductOrders} from "../../models/product-orders.model";
import {ReturnS} from "../../models/return.model";
import {ReturnProduct} from "../../models/return-product.model";
import {AuthenticationService} from "../../services/AuthenticationService";

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  orderReference: string;
  returnReference: string;
  customerEmail: string;
  errOrderNotFound: boolean = false;
  errReturnExists: boolean = false;
  orders: ProductOrders = new ProductOrders();
  returnProducts: any = [];
  productsToReturn: ReturnProduct[] = [];
  refund: number;
  aReturn: ReturnS;
  aCheckReturn: ReturnS;
  errReturnNotFound: boolean = false;
  returnRequestFinished: boolean = false;
  requestCompleted: boolean = false;

  constructor(private ecommerceService: EcommerceService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  async getOrder() {
    this.errOrderNotFound = false;
    this.errReturnExists = false;
    this.requestCompleted = false;
    this.returnProducts = [];
    await this.ecommerceService.checkReturn(this.orderReference).then(rtn => {
      // @ts-ignore
      this.errReturnExists = rtn;
      console.log(rtn);
    });

    if(this.errReturnExists == false){
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
    }
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
    this.productsToReturn = [];
    Array.from(this.returnProducts).forEach(rtnProduct => {
      // @ts-ignore
      if(rtnProduct.checked){
        // @ts-ignore
        this.productsToReturn.push(new ReturnProduct(rtnProduct.product, rtnProduct.size, rtnProduct.quantityToReturn));
      }
    });
    if(this.orders.discount){
      this.refund = this.findRefundSum() - this.orders.discount.value;
    } else{
      this.refund = this.findRefundSum();
    }
    let rtn = new ReturnS(this.productsToReturn, this.orders.user, this.orders.address, this.refund, this.orders.reference);
    this.returnRequestFinished = true;
    this.ecommerceService.saveReturn(rtn).subscribe();
    this.requestCompleted = true;
    this.returnProducts = [];
  }
    
    reset(){
      this.orderReference = '';
      this.customerEmail = '';
      this.errOrderNotFound = false;
      this.errReturnExists = false;
      this.errReturnNotFound = false;
      this.orders = new ProductOrders();
      this.returnProducts = [];
      this.requestCompleted = false;
      this.productsToReturn = [];
      this.refund = 0;
      this.aReturn = null;
      this.returnRequestFinished = false;
      this.aCheckReturn = null;
    }

    findRefundSum(){
      let sum = 0;
      this.productsToReturn.forEach(item => {
        sum += item.product.price * item.quantityToReturn;
      });
      return sum;
    }

  async getReturn() {
    this.aCheckReturn = null;
    this.errReturnNotFound = false;
    await this.ecommerceService.getReturn(this.returnReference).then(aReturn => {
      if(aReturn){
        // @ts-ignore
        this.aCheckReturn = new ReturnS(aReturn.returnProducts, aReturn.user, aReturn.address, aReturn.amount, aReturn.orderReference);
        // @ts-ignore
        this.aCheckReturn.status = aReturn.status;
        // @ts-ignore
        this.aCheckReturn.reference = aReturn.reference;
      } else {
        this.aCheckReturn = null;
        this.errReturnNotFound = true;
      }
    });
  }

  async cancelReturn() {
    if(confirm("Are you sure you would like to cancel this return request?")){
      this.ecommerceService.cancelReturn(this.aCheckReturn.reference).subscribe();
      this.reset();
    }

  }

  async approveReturn() {
    if(confirm("Are you sure you would like to approve this return request?")) {
      this.ecommerceService.approveReturn(this.aCheckReturn.reference).subscribe();
      this.reset();
    }
  }
}
