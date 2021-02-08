import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire';
//@ts-ignore
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductsListComponent } from './product/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    ProductDetailsComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{ provide: SETTINGS, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
