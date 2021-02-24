import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AppsService} from '../../apps-component/apps.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  appID: any;

  submitted = false;

  constructor(private productService: ProductService,
              private appService: AppsService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.appID = this.route.snapshot.params['appID'];
  }

  newProduct(): void {
    this.submitted = false;

  }
  save() {
    this.productService.createProduct(this.product);
  }
  onSubmit() {
    this.submitted = true;
    this.product.appID=this.appID;
    this.product.createDate= new Date();
    this.product.isDeleted=false;
    this.save();
  }

}
