import {ProductsListComponent} from './product/products-list/products-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'create', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
