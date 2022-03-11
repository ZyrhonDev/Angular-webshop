import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { DetailsComponent } from './components/details/details/details.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home/home.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ActionComponent } from './components/action/action/action.component';
import { ThrillerComponent } from './components/thriller/thriller/thriller.component';
import { ComedyComponent } from './components/comedy/comedy/comedy.component';
import { ScifiComponent } from './components/scifi/scifi/scifi.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotfoundComponent,
    DetailsComponent,
    AdminComponent,
    HomeComponent,
    ProductsComponent,
    ActionComponent,
    ThrillerComponent,
    ComedyComponent,
    ScifiComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
