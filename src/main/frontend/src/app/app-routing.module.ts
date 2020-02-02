import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./ecommerce/products/products.component";
import {EcommerceComponent} from "./ecommerce/ecommerce.component";
import {AboutComponent} from "./ecommerce/about/about.component";
import {SupportComponent} from "./ecommerce/support/support.component";
import {ReturnsComponent} from "./ecommerce/support/returns/returns.component";
import {OrdersComponent} from "./ecommerce/support/orders/orders.component";
import {OrdersComponent as Order} from "./ecommerce/orders/orders.component"


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: EcommerceComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'support', component: SupportComponent},
  {path: 'returns', component: ReturnsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order', component: Order}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
