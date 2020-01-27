import {Component, OnInit, ViewChild} from "@angular/core";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;
  showProducts = false;

  @ViewChild('productsC', {static: false})
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC',{static: false})
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC', {static: false})
  ordersC: OrdersComponent;
  images = [604, 662, 22, 596].map((n) => `https://picsum.photos/id/${n}/1080/400`);

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  showProds() {
    this.showProducts = true;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.showProducts = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
    this.ordersC.reset();
  }

  ngOnInit(): void {
  }
}
