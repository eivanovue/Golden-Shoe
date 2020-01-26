import {Component, OnInit, ViewChild} from "@angular/core";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {FiltersComponent} from "./products/filters/filters.component";

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('productsC', {static: false})
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC',{static: false})
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC', {static: false})
  ordersC: OrdersComponent;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
    this.ordersC.reset();
  }

  shoppingCartEmpty(): boolean {
    return this.shoppingCartC.orders.productOrders.length == 0;
  }

  ngOnInit(): void {
  }
}
