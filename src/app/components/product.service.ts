import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Product} from './product';
import {AppsService} from '../apps-component/apps.service';
import {Apps} from '../apps-component/apps';
import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private dbPath = '/products';

    productRef: AngularFirestoreCollection<Product> = null;


    constructor(private db: AngularFirestore,
                private appService: AppsService) {
        this.productRef = db.collection(this.dbPath);

    }

    createProduct(product: Product): void {
        this.productRef.add({...product})
            .then(_product => this.assignProductToApp(_product,product));

    }

    updateProduct(productID: string, value: any): Promise<void> {
        return this.productRef.doc(productID).update(value);
    }

    deleteProduct(productID: string) {
        this.productRef.doc(productID).get().subscribe(a => {
            //a.data().isDeleted=true;
            this.updateProduct(productID, {isDeleted: true});
            //console.log(a.data().isDeleted);
            //console.log(productID);
        });
    }

    /*
    deleteProduct(productID: string): Promise<void> {
      return this.productRef.doc(productID).delete();
      }
     */
    getProductsList(): AngularFirestoreCollection<Product> {
        return this.productRef;
    }
    private assignProductToApp(_product: DocumentReference<Product>,product: Product){
        const _appID = product.appID;
        const _productID = _product.id;
        const app = this.appService.getAppList().doc(_appID);
        app.get().subscribe(_app => {
            const arr: string[] = _app.data().products;
            arr.push(_productID);
            const data: Apps = {
                products: arr,
                title: _app.data().title,
                appID: _appID,
                isDeleted: false,
                createDate: _app.data().createDate
            };
            app.update(data);
        });
    }
}

