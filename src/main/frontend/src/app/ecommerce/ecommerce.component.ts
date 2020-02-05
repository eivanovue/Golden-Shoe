import {Component, OnInit, ViewChild} from "@angular/core";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  orderFinished = false;
  private router: Router;
  images = [604, 662, 22, 596].map((n) => `https://picsum.photos/id/${n}/1080/500`);

  constructor(router: Router){
    this.router = router;
  }

  showProds() {
    this.router.navigate(['/products'])
  }

  ngOnInit(): void {
  }
}
