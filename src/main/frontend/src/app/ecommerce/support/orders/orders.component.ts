import { Component, OnInit } from '@angular/core';
import {ProductOrders} from "../../models/product-orders.model";
import {EcommerceComponent} from "../../ecommerce.component";
import {EcommerceService} from "../../services/EcommerceService";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderReference: string;
  order: ProductOrders = null;
  errOrderNotFound: boolean;
  deliveryDate: string;
  products: any [] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
  }

  async getOrder() {
    await this.ecommerceService.getOrder(this.orderReference).then(order => {
      if(order){
        this.order = new ProductOrders();
        // @ts-ignore
        this.order.dateCreated = order.dateCreated;
        // @ts-ignore
        this.order.status = order.status;
        // @ts-ignore
        this.order.productOrders = order.productOrders;
        // @ts-ignore
        this.order.address = order.address;
        // @ts-ignore
        this.order.delivery = order.delivery;
        // @ts-ignore
        this.order.discount = order.discount;
        // @ts-ignore
        this.order.reference = order.reference;

        this.order.productOrders.forEach(item => {
          this.products.push(
            {
              // @ts-ignore
              'product': item.pk.product,
              'size': item.productSize,
              'quantity': item.quantity
            });
        });

        var deliveryDate = this.addDays(this.order.dateCreated, this.order.delivery.days);
        this.deliveryDate = deliveryDate.getDate() + " " + this.monthNames[deliveryDate.getMonth()] + " " + deliveryDate.getFullYear();

        // console.log(this.order);
        // console.log(this.products);
      }
    })

  }

  addDays(date, days) {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days + 1);
    return copy
  }


  reset() {

  }

  cancelOrder() {

  }
}
