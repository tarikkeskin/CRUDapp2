import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {AngularFirestoreDocument, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: any;
  product: Observable<firebase.firestore.DocumentSnapshot<Product>>;
  title: any;
  description: any;
  price: any;

  constructor(private productService: ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.product=this.productService.productRef.doc(this.id).get();
    this.product.subscribe(a=>{
      this.title=a.data().title;
      this.description=a.data().description;
      this.price=a.data().price;
    });
  }
}
