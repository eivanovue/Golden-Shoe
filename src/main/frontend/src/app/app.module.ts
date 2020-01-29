import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EcommerceService} from "./ecommerce/services/EcommerceService";
import {SortingService} from "./ecommerce/services/SortingService";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltersComponent } from './ecommerce/products/filters/filters.component';
import { SortingComponent } from './ecommerce/products/sorting/sorting.component';
import { SupportComponent } from './ecommerce/support/support.component';
import { ChatComponent } from './ecommerce/support/chat/chat.component';
import {LivechatWidgetModule} from "@livechat/angular-widget";

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    FiltersComponent,
    SortingComponent,
    SupportComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    LivechatWidgetModule
  ],
  providers: [EcommerceService, SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
