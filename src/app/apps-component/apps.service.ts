import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Apps} from './apps'

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  private dbPath = '/apps';

  appRef: AngularFirestoreCollection<Apps> = null;


  constructor(private db: AngularFirestore) {
    this.appRef = db.collection(this.dbPath);
  }

  createApp(app: Apps): void {
    this.appRef.add({...app});
  }

  updateApp(appID: string, value: any): Promise<void> {
    return  this.appRef.doc(appID).update(value);
  }

  deleteApp(appID: string){
    this.appRef.doc(appID).get().subscribe(app=>{

      this.updateApp(appID,{isDeleted: true}).then(()=>window.location.reload());
      /*
      for (let i=0;i<app.data().products.length;i++){
        //console.log(a.data().products[i]);
        this.productService.productRef.doc(app.data().products[i]).get().subscribe(product=>{
          product.data().isDeleted=true;
        })
      }

       */

    })
  }

  getAppList(): AngularFirestoreCollection<Apps> {
    return this.appRef;
  }
}
