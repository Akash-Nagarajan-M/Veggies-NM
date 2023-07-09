import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './register/register.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

// Routing configuration
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule) },
  { path: 'faq', component:FaqComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'myOrders', component:MyOrdersComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
