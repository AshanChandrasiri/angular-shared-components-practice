import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  // {
  //   path: 'admin',
  //   loadChildren:'./admin/admin.module#AdminModule'
  // },
  // {
  //   path: 'merchant',
  //   loadChildren:'./merchant/merchant.module#MerchantModule',

  // },
  // {
  //   path: 'login',
  //   loadChildren:'./login/login.module#LoginModule'
  // },
  // {
  //   path: 'product-list',
  //   loadChildren:'./product-list/product-list.module#ProductListModule'
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }