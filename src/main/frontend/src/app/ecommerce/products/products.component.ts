import { Component, OnInit } from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {Product} from "../models/product.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs";
import {ProductOrders} from "../models/product-orders.model";
import {ProductSize} from "../models/product-size.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  sizeSet = false;
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;
  radioGroupForm: FormGroup;
  private formBuilder: FormBuilder;


  constructor(private ecommerceService: EcommerceService, formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  getProductIndex(product: Product): number {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  addToCart(order: ProductOrder) {
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
    productOrder.size = null;
    productOrder.quantity = 0;
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
    this.radioGroupForm = this.formBuilder.group({
      'model': ''
    });
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  setProductSize(order: ProductOrder, id: number, size: number, stock: number) {
    console.log(size + " "
    + stock);
    order.size = new ProductSize(id, size, stock);
    this.sizeSet = true;
  }

  unsetProductSize(order: ProductOrder) {
    order.size = null;
    order.quantity = 0;
  }
}
