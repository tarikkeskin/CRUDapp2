import {ProductsListComponent} from './components/products-list/products-list.component';
import {CreateProductComponent} from './components/create-product/create-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'create', component: CreateProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'oneProduct/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
