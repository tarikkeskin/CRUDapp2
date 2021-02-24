import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../components/product.service';
import {Apps} from '../apps';
import {map} from 'rxjs/operators';
import {AppsService} from '../apps.service';
import {Product} from '../../components/product';

@Component({
    selector: 'app-apps-list',
    templateUrl: './apps-list.component.html',
    styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

    public appsArray: Array<Apps>;
    public availableProduct: Array<Product>;


    constructor(private appService: AppsService, private productService: ProductService) {
    }

    ngOnInit() {
        this.getAppListandIDs();
        this.getProductListandIDs();
    }

    getAppListandIDs() {
        this.appsArray = this.appsArray || [];

        this.appService.getAppList().snapshotChanges().pipe(
            map(a =>
                a.map(c =>
                    ({appID: c.payload.doc.id, ...c.payload.doc.data()})
                )
            )
        ).subscribe(apps => {
            apps.map(app => {
                if (!app.isDeleted) {
                    this.appsArray.push(app);
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

    getProductsByAppID(appID) {
        this.appService.getAppList().doc('4mGLjreMnLwbImpn3giL').get()
            .subscribe(app => {
            app.data().products.map(productId => {
                this.productService.productRef.doc(productId.toString()).get()
                    .subscribe(productData => {
                    console.log(productData.data());
                });
            });
        });
    }


}
