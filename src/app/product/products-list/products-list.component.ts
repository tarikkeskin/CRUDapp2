import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {

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
}
