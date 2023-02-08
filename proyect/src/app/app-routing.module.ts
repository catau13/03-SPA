import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [

 
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', pathMatch: 'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
