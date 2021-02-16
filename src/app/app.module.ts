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
import {MatGridListModule, MatNativeDateModule} from '@angular/material';

import {
  MatCardModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDatepicker,
  MatToolbarModule,
  MatListModule,
  MatInputModule, MAT_DATE_LOCALE
} from '@angular/material';


import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductDetailsComponent } from './components/product-card-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductComponent } from './components/product/product.component';
import {DeletedProductsComponent} from './components/deleted-products/deleted-products.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    ProductsListComponent,
    AppComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    HomeComponent,
    EditProductComponent,
    ProductComponent,
    DeletedProductsComponent
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
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatCarouselModule.forRoot()
  ],
  providers: [{ provide: SETTINGS, useValue: {} },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
