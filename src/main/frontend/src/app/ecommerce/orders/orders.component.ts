import { Component, OnInit } from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs";
import {EcommerceService} from "../services/EcommerceService";
import {Delivery} from "../models/delivery.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Address} from "../models/address.model";

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
  addressForm: FormGroup;
  userForm: FormGroup;
  public events: any[] = []; // use later to display form changes

  constructor(private ecommerceService: EcommerceService, private _fb: FormBuilder) {
    this.orders = this.ecommerceService.ProductOrders;
    this.addressForm = this._fb.group({
      address: this._fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['Choose...', Validators.required],
        postCode: ['', Validators.required]
      })
    });
    this.userForm = this._fb.group({
        name: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        telephone: ['', Validators.required]
      });
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.ProductOrders;
    });
    this.loadTotal();
    this.loadDelivery();
    // subscribe to form changes
    this.subcribeToFormChanges();
  }

  pay() {
    this.paid = true;
    this.orders.address = this.addressForm.value.address;
    this.orders.user = this.userForm.value.user;
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
  }

  checkDeliverySet() {
    return !!this.orders.delivery;
  }

  setDelivery() {
    if (this.selectedDelivery) {
      this.orders.delivery = this.selectedDelivery;
      this.total = this.ecommerceService.Total;
      this.total = this.total + this.selectedDelivery.price;
    } else {
      this.orders.delivery = this.selectedDelivery;
      this.total = this.ecommerceService.Total;
    }
  }

  subcribeToFormChanges() {
    // initialize stream
    const addressFormValueChanges$ = this.addressForm.valueChanges;
    const userFormValueChanges$ = this.userForm.valueChanges;

    // subscribe to the stream
    addressFormValueChanges$.subscribe(x => this.events
      .push({ event: 'STATUS CHANGED', object: x }));

    userFormValueChanges$.subscribe(x => this.events
      .push({ event: 'STATUS CHANGED', object: x }));
  }

  get user(){return this.userForm.controls;}
  get address(){return this.addressForm.controls;}

  reset() {
    this.addressForm.reset();
    this.userForm.reset();
    this.selectedDelivery = null;
  }
}
