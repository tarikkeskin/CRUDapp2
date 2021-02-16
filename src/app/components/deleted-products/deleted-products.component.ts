import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {map} from 'rxjs/operators';
import {Product} from '../product';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-deleted-products',
  templateUrl: './deleted-products.component.html',
  styleUrls: ['./deleted-products.component.css']
})
export class DeletedProductsComponent implements OnInit {

  products: any;
  deletedProduct: Array<Product> = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();

  }
  getProductList() {
    this.deletedProduct = this.deletedProduct || [];

    this.productService.getProductsList().snapshotChanges().pipe(
        map(a =>
            a.map(c =>
                ({ productID: c.payload.doc.id, ...c.payload.doc.data() })
            )
        )
    ).subscribe( product => {
      product.map(a=>
      {
        if (a != null) {
          if (a.isDeleted) {
            this.deletedProduct.push(a);
          }
        }

      })
      //this.products = product;
      //console.log(this.availableProduct2);
    });
    //console.log(this.deletedProduct);
    /*

    this.productService.getProductsList().snapshotChanges().pipe(
        map(a =>
            a.map(c =>
                ({ productID: c.payload.doc.id, ...c.payload.doc.data() })
            )
        )
    ).subscribe( product => {
      this.products = product;
    });

  }

     */


}

}
