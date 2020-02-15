import { Component, OnInit } from '@angular/core';
import {ProductOrders} from "../../models/product-orders.model";
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
  deliveryDate: any;
  products: any [] = [];
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
  }

  async getOrder() {
    this.order = null;
    this.products = [];
    this.errOrderNotFound = false;
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
        // @ts-ignore
        this.order.productOrders.forEach(item => {
          this.products.push(
            {
              // @ts-ignore
              'product': item.pk.product,
              'size': item.productSize,
              'quantity': item.quantity
            });
        });
        //I hate javascript dates.....
        let date = this.order.dateCreated.toString().split("/");
        let deliveryDate = new Date(date[2], date[1] - 1, date[0]);
        console.log(deliveryDate.getDay());
        this.deliveryDate = this.dayNames[deliveryDate.getDay() + this.order.delivery.days] + ", " + [deliveryDate.getDate() + this.order.delivery.days] + " of " + this.monthNames[deliveryDate.getUTCMonth()] + " " + deliveryDate.getFullYear();
      } else {
        this.errOrderNotFound = true;
      }
    })

  }


  reset() {
    this.orderReference = null;
    this.order = null;
    this.errOrderNotFound = false;
    this.products = [];
  }

  cancelOrder() {
    if(confirm("Are you sure you would like to cancel this order?")){
      let reference = this.order.reference;
      this.ecommerceService.cancelOrder(this.order.reference).subscribe();
      this.reset();
      this.orderReference = reference;
      this.getOrder();
    }
  }
}
