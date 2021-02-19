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
    this.appRef.doc(appID).get().subscribe(a=>{
      //a.data().isDeleted=true;
      this.updateApp(appID,{isDeleted: true})
      //console.log(a.data().isDeleted);
      //console.log(productID);
    })
  }

  getAppList(): AngularFirestoreCollection<Apps> {
    return this.appRef;
  }
}
