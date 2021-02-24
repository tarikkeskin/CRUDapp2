import { Component, OnInit } from '@angular/core';
import {AppsService} from '../apps.service';
import {ProductService} from '../../components/product.service';
import {map} from 'rxjs/operators';
import {Apps} from '../apps';
import {Product} from '../../components/product';

@Component({
  selector: 'app-deleted-apps',
  templateUrl: './deleted-apps.component.html',
  styleUrls: ['./deleted-apps.component.css']
})
export class DeletedAppsComponent implements OnInit {

  public deletedAppsArray: Array<Apps>;
  public availableProduct: Array<Product>;


  constructor(private appService: AppsService,
              private productService: ProductService) { }

  ngOnInit() {
    this.getAppListandIDs();
    this.getProductListandIDs();
  }

  getAppListandIDs() {
    this.deletedAppsArray = this.deletedAppsArray || [];

    this.appService.getAppList().snapshotChanges().pipe(
        map(a =>
            a.map(c =>
                ({appID: c.payload.doc.id, ...c.payload.doc.data()})
            )
        )
    ).subscribe(apps => {
      apps.map(app => {
        if (app.isDeleted) {
          this.deletedAppsArray.push(app);
        }
      });

    });


  }
  getProductListandIDs() {

    this.availableProduct = this.availableProduct || [];

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
            this.availableProduct.push(product);
          }
        }

      })
    });

  }

}
