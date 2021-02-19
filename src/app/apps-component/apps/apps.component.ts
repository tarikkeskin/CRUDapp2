import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../components/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppsService} from '../apps.service';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {Product} from '../../components/product';
import {Apps} from '../apps';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  id: any;
  app: Observable<firebase.firestore.DocumentSnapshot<Apps>>;
  appID: any;


  appProductsID: Array<String>;

  constructor(private appService: AppsService,private productService: ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.appProductsID = this.appProductsID || [];

    this.app=this.appService.getAppList().doc(this.id).get();
    this.app
        .subscribe(app=>{
          this.appID=app.data().appID;
          this.appProductsID.push(this.appID);
        });

  }

}
