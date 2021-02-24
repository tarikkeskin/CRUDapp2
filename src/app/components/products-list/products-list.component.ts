import {Component, enableProdMode, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {map} from 'rxjs/operators';
import {Product} from '../product';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public availableProduct2: Array<Product>;


  constructor(private productService: ProductService) { }

  ngOnInit() {
   // this.getProductList();

    console.log("product-list-<");
    console.log(this.availableProduct2);

  }
  getProductList() {

    this.availableProduct2 = this.availableProduct2 || [];

    this.productService.getProductsList().snapshotChanges().pipe(
        map(a =>
            a.map(c =>
                ({
                   productID: c.payload.doc.id, ...c.payload.doc.data()
                })
            )
        )
    ).subscribe( products => {
      products.map(product=>
      {
        if (product != null) {
          if (!product.isDeleted) {
            this.availableProduct2.push(product);
          }
        }

      })
    });

  }


}
