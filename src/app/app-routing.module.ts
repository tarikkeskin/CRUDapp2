import {ProductsListComponent} from './components/products-list/products-list.component';
import {CreateProductComponent} from './components/create-product/create-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {ProductComponent} from './components/product/product.component';
import {DeletedProductsComponent} from './components/deleted-products/deleted-products.component';
import {AppsCreateComponent} from './apps-component/apps-create/apps-create.component';
import {AppsListComponent} from './apps-component/apps-list/apps-list.component';
import {AppsComponent} from './apps-component/apps/apps.component';
import {DeletedAppsComponent} from './apps-component/deleted-apps/deleted-apps.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'create', component: CreateProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'Product/:id', component: ProductComponent},
  {path: 'deletedProducts', component: DeletedProductsComponent},
  {path: 'createApp', component: AppsCreateComponent},
  {path: 'appList', component: AppsListComponent},
  {path: 'App/:appID', component:AppsComponent},
  { path: 'App/:appID/createProduct', component: CreateProductComponent},
  {path: 'deletedApps', component: DeletedAppsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
