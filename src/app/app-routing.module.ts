import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { SingleproductdetailsComponent } from './pages/singleproductdetails/singleproductdetails.component';
import { ProductcategoryComponent } from './pages/productcategory/productcategory.component';
import { CartComponent } from './pages/cart/cart.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { SupportComponent } from './pages/support/support.component';
import { PaypalComponent } from './pages/paypal/paypal.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'mainpage',
    component: MainpageComponent
  },
  {
    path:'singleproductdetails',
    component: SingleproductdetailsComponent
  },
  {
    path:'productcategory',
    component: ProductcategoryComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'userprofile',
    component: UserprofileComponent
  },
  {
    path:'support',
    component: SupportComponent
  },
  {
    path:'payment',
    component: PaypalComponent
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
