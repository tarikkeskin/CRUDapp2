import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../components/product.service';
import {Apps} from '../apps';
import {map} from 'rxjs/operators';
import {AppsService} from '../apps.service';

@Component({
    selector: 'app-apps-list',
    templateUrl: './apps-list.component.html',
    styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

    public appsArray: Array<Apps>;

    constructor(private appService: AppsService, private productService: ProductService) {
    }

    ngOnInit() {
        this.getAppList();
        console.log(this.appsArray);

        //this.getProductsByAppID('fd');
    }

    getAppList() {
        this.appsArray = this.appsArray || [];

        this.appService.getAppList().snapshotChanges().pipe(
            map(a =>
                a.map(c =>
                    ({appID: c.payload.doc.id, ...c.payload.doc.data()})
                )
            )
        ).subscribe(product => {
            product.map(a => {
                this.appsArray.push(a);
            });

        });


    }

    getAppsProductsIDs(){
        //this.appsArray.map(a=>console.log(a.products));
        console.log(this.appsArray.map(a=>this.appService.getAppList().doc(a.appID)));
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
