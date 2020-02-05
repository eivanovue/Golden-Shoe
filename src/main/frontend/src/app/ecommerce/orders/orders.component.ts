import { Component, OnInit } from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs";
import {EcommerceService} from "../services/EcommerceService";
import {Delivery} from "../models/delivery.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Discount} from "../models/discount.model";

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
  discount: Discount;
  discountSet: boolean;
  voucher: string;
  public events: any[] = [];
  isCollapsed: boolean = false;
  discountValid: boolean = true;
  discountNotFound: boolean = false;

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
  //TO-DO: Use LocalStorage to keep state of order when page is refreshed!
  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.ProductOrders;
    });
    this.loadTotal();
    this.loadDelivery();
    // subscribe to form changes
    this.subscribeToFormChanges();
  }

  pay() {
    this.paid = true;
    this.orders.address = this.addressForm.value.address;
    this.orders.user = this.userForm.value;
    this.addressForm.controls['address'].disable();
    this.userForm.disable();
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.total = this.ecommerceService.Total;
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
      if(this.discountSet) {
        this.total = (this.total - this.discount.value) + this.selectedDelivery.price;
      } else {
        this.total = this.total + this.selectedDelivery.price;
      }
    } else {
      this.orders.delivery = this.selectedDelivery;
      if(this.discountSet){
        this.total = this.ecommerceService.Total - this.discount.value;
      } else {
        this.total = this.ecommerceService.Total;
      }
    }
  }

  setDiscount() {
    this.discountValid = true;
    this.discountNotFound = false;
    this.ecommerceService.getDiscount(this.voucher).then(discount => {
      if(discount == false){
        this.discountNotFound = true;
      } else {
        // @ts-ignore
        this.discount = new Discount(discount.id, discount.voucher, discount.expiry, discount.expired, discount.value);
        this.ecommerceService.checkDiscount(this.voucher).then(valid => {
          if (valid) {
            // @ts-ignore
            this.total -= discount.value;
            this.discountValid = true;
            this.discountSet = true;
            this.orders.discount = this.discount;
          } else {
            this.discountValid = false;
          }
        });
      }
    })
  }

  subscribeToFormChanges() {
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
    this.discount = null;
    this.discountSet = false;
    this.voucher = "";
    this.discountValid = true;
    this.discountNotFound = false;
    this.isCollapsed = false;
  }
}
