import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {map} from 'rxjs/operators';
import {Product} from '../product';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any;
  availableProduct2: Array<Product> = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.availableProduct2 = this.availableProduct2 || [];

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
          if (!a.isDeleted) {
            this.availableProduct2.push(a);
          }
        }

      })
      //this.products = product;
      console.log(this.availableProduct2);
    });


  }
}
