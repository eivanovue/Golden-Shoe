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
import { CarouselComponent } from './ecommerce/main/carousel/carousel.component';
import { NavComponent } from './ecommerce/main/nav/nav.component';
import { FooterComponent } from './ecommerce/main/footer/footer.component';
import { AboutComponent } from './ecommerce/about/about.component';
import { ReturnsComponent } from './ecommerce/support/returns/returns.component';
import { OrdersComponent as CheckOrderComponent } from './ecommerce/support/orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

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
    ChatComponent,
    CarouselComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ReturnsComponent,
    CheckOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    LivechatWidgetModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [EcommerceService, SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
