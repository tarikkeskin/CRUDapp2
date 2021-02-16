import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = '/products';

  productRef: AngularFirestoreCollection<Product> = null;


  constructor(private db: AngularFirestore) {
    this.productRef = db.collection(this.dbPath);
  }

  createProduct(product: Product): void {
    this.productRef.add({...product});
  }

  updateProduct(productID: string, value: any): Promise<void> {
    return  this.productRef.doc(productID).update(value);
  }
  deleteProduct(productID: string){
    this.productRef.doc(productID).get().subscribe(a=>{
      //a.data().isDeleted=true;
      this.updateProduct(productID,{isDeleted: true})
      //console.log(a.data().isDeleted);
      //console.log(productID);
    })
  }
  /*
  deleteProduct(productID: string): Promise<void> {
    return this.productRef.doc(productID).delete();
    }
   */
  getProductsList(): AngularFirestoreCollection<Product> {
    return this.productRef;
  }
}

