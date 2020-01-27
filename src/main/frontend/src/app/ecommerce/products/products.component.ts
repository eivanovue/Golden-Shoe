import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ProductOrder} from "../models/product-order.model";
import {Product} from "../models/product.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs";
import {ProductOrders} from "../models/product-orders.model";
import {SortingService} from "../services/SortingService";
import {FiltersComponent} from "./filters/filters.component";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  filteredProductOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;
  p: number = 1;
  private sortingId: number;
  isCollapsed: boolean = false;


  @Output() showProducts: EventEmitter<boolean>;

  constructor(private ecommerceService: EcommerceService, private sortingService: SortingService) {
    this.showProducts = new EventEmitter<boolean>();
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
    this.filteredProductOrders = this.productOrders;
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
    this.p = 1;
    this.isCollapsed = false;
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  decrementQuantity(order) {
    if(order.quantity != 0){
      order.quantity--;
    }
  }

  incrementQuantity(order) {
      order.quantity++;
  }

  onSort(sortingEvent) {
    this.sortingId = sortingEvent;
    SortingService.sortDecider(this.filteredProductOrders, this.sortingId);
  }

  onFilter(checkedValues) {
    if (checkedValues.length) {
      this.filterProducts(checkedValues);
    } else {
      this.filteredProductOrders = this.productOrders;
    }
  }

  filterProducts(checkedValues) {
    let filtered = this.filteredProductOrders = this.productOrders
      .filter(product => {
        let arr = Object.values(product.product.productType);
        return arr
          .map(p => p)
          .find(name => {
            return checkedValues.find(c => c === name);
          });
      });

    SortingService.sortDecider(filtered, this.sortingId);
    this.filteredProductOrders = filtered;
  }
}
