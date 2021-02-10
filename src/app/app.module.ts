import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire';
//@ts-ignore
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//Material
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule, MatButtonModule, MatDatepickerModule, MatDatepicker, MatToolbarModule, MatListModule} from '@angular/material';


import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    AppComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    HomeComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatSliderModule,
    MatCardModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [{ provide: SETTINGS, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
