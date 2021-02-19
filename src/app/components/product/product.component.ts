import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {Observable} from 'rxjs';
import firebase from 'firebase';


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
  createDate: Date;
  editDate: Date;
  formatted_createDate: string;
  formatted_editDate: any;
  productID: any;

  constructor(private productService: ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.product=this.productService.productRef.doc(this.id).get();
    this.product.subscribe(a=>{
      this.title=a.data().title;
      this.description=a.data().description;
      this.price=a.data().price;
      this.createDate=a.data().createDate;
      this.editDate=a.data().editDate;
      this.formatted_createDate = this.timeConverter(this.createDate);
      this.formatted_editDate = this.timeConverter(this.editDate);

    });

  }
  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear()-1969;
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
}
