import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './components/action/action/action.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { ComedyComponent } from './components/comedy/comedy/comedy.component';
import { DetailsComponent } from './components/details/details/details.component';
import { HomeComponent } from './components/home/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ScifiComponent } from './components/scifi/scifi/scifi.component';
import { ThrillerComponent } from './components/thriller/thriller/thriller.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products/Action', component: ActionComponent },
  { path: 'products/Thriller', component: ThrillerComponent },
  { path: 'products/Comedy', component: ComedyComponent },
  { path: 'products/Sci-fi', component: ScifiComponent },
  { path: 'products/Action/:id', component: DetailsComponent},
  { path: 'products/Thriller/:id', component: DetailsComponent},
  { path: 'products/Comedy/:id', component: DetailsComponent},
  { path: 'products/Sci-fi/:id', component: DetailsComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
