import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import {ProductsListComponent} from './product/products-list/products-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'customers', pathMatch: 'full' },
  //{ path: 'customers', component: CustomersListComponent },
  //{ path: 'add', component: CreateCustomerComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'create', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
