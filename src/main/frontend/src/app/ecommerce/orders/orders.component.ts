import { Component, OnInit } from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs";
import {EcommerceService} from "../services/EcommerceService";
import {Delivery} from "../models/delivery.model";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total: number;
  delivery: Delivery[] = [];
  selectedDelivery: Delivery = null;
  paid: boolean;
  sub: Subscription;

  constructor(private ecommerceService: EcommerceService) {
    this.orders = this.ecommerceService.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.ProductOrders;
    });
    this.loadTotal();
    this.loadDelivery();
  }

  pay() {
    this.paid = true;
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
      this.total = this.ecommerceService.Total;
    });
  }

  loadDelivery() {
    this.ecommerceService.getAllDeliveries().subscribe((delivery: any[]) => {
        delivery.forEach(item => {
          this.delivery.push(item);
        })
      },
      (error) => console.log(error)
    );
    console.log(this.delivery)
  }

  checkDeliverySet() {
    return !!this.orders.delivery;
  }

  setDelivery() {
    if (this.selectedDelivery) {
      this.orders.delivery = this.selectedDelivery;
    } else {
      this.orders.delivery = this.selectedDelivery;
    }
  }

}
