import {Injectable} from "@angular/core";
import {ProductOrder} from "../models/product-order.model";
import {ProductOrders} from "../models/product-orders.model";
import {Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Discount} from "../models/discount.model";
import {ReturnS} from "../models/return.model";

@Injectable()
export class EcommerceService {
  private productsUrl = "/api/products";
  private ordersUrl = "/api/orders";
  private deliveriesUrl = "/api/deliveries";
  private discountUrl = "/api/discounts";
  private checkDiscountUrl = "api/discounts/check";
  private returnUrl = "/api/returns";
  private discount: Discount;
  private discountValid: boolean;
  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();
  private orderReturn: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

  saveOrder(order: ProductOrders) {
    return this.http.post(this.ordersUrl, order);
  }

  saveReturn(aReturn: ReturnS) {
    return this.http.post(this.returnUrl, aReturn);
  }

  getAllDeliveries() {
    return this.http.get(this.deliveriesUrl);
  }

  getOrderReturn(orderReference: string) {
    let params = new HttpParams().set("reference", orderReference);
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.ordersUrl;
      this.http
        .get<ProductOrders[]>(apiURL, {params: params})
        .toPromise()
        .then((res: any) => {
            // Success
          this.orderReturn.productOrders = res.orderProducts;
          this.orderReturn.discount = res.discount;
          this.orderReturn.user = res.user;
          this.orderReturn.address = res.address;
          this.orderReturn.delivery = res.delivery;
          this.orderReturn.reference = res.reference;
          // console.log(res);
          resolve(this.orderReturn);
          },
        ).catch(err => {
        resolve(false);
      });
    });
    return promise;
  }

  getDiscount(voucher: string) {
    let params = new HttpParams().set("voucher", voucher);
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.discountUrl;
      this.http
        .get<Discount[]>(apiURL, {params: params})
        .toPromise()
        .then((res: any) => {
            // Success
            this.discount =  new Discount(
              res.id,
              res.voucher,
              res.expiry,
              res.expired,
              res.value
            );
            resolve(this.discount);
          },
        ).catch(err => {
          resolve(false);
      });
    });
    return promise;
  }

  checkDiscount(voucher: string){
    let params = new HttpParams().set("voucher", voucher);
    const promise = new Promise((resolve) => {
      const apiURL = this.checkDiscountUrl;
      this.http
        .get<Discount[]>(apiURL, {params: params})
        .toPromise()
        .then((res: any) => {
            // Success
            this.discountValid = res;
            resolve(this.discountValid);
          },
        );
    });
    return promise;
  }


  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next();
  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }


}
