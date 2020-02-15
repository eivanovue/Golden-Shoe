import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs";
import {EcommerceService} from "../services/EcommerceService";
import {ProductOrder} from "../models/product-order.model";
import {Router} from "@angular/router";
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  orderFinished: boolean;
  orders: ProductOrders = new ProductOrders();
  total: number;
  sub: Subscription;

  @Output() onOrderFinished: EventEmitter<boolean>;
  private router: Router;


  constructor(private ecommerceService: EcommerceService, router: Router) {
    this.router = router;
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();
    this.router = router;
  }

  ngOnInit() {
    if(localStorage.getItem("products") === null){
      this.orders = new ProductOrders();
    } else {
      this.orders = plainToClass(ProductOrders, JSON.parse(localStorage.getItem("products")));
    }
    this.loadCart();
    this.loadTotal();
  }

  loadTotal() {
    // this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
    //   this.total = this.calculateTotal(this.orders.productOrders);
    // });
    this.total = this.calculateTotal(this.orders.productOrders);
    this.ecommerceService.Total = this.total;
  }

  loadCart() {
    this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
      let productOrder = this.ecommerceService.SelectedProductOrder;

      if (productOrder) {
        this.orders.productOrders.push(new ProductOrder(
          productOrder.product, productOrder.quantity, productOrder.size));
      }

      this.ecommerceService.ProductOrders = this.orders;
      this.orders = this.ecommerceService.ProductOrders;
      this.loadTotal();
    });
  }

  private calculateTotal(productOrder: ProductOrder[]): number{
    let sum = 0;
    productOrder.forEach(value => {
      sum += (value.product.price * value. quantity);
    });
    return sum;
  }

  finishOrder() {
    this.orderFinished = true;
    this.ecommerceService.Total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
    this.router.navigate(['/order'])
  }

  reset() {
    this.orderFinished = false;
    this.orders = new ProductOrders();
    this.orders.productOrders = [];
    this.loadTotal();
    this.total = 0;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
