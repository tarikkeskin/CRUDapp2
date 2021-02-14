import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  id: any;
  title: string;
  description: string;
  price: string;
  edited = false;
  editDate: any;
  deleteDate: any;
  inStock: boolean;

  constructor(private productService: ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.productRef.doc(this.id).get()
        .subscribe(a=>{
          this.title=a.data().title;
          this.description=a.data().description;
          this.price=a.data().price;
          this.inStock=a.data().inStock;
    })

  }

  updateCategoryID(categoryID: string) {
    this.productService
        .updateProduct(this.id, {categoryID: categoryID})
        .catch(e => console.log(e));
  }
  updateTitle(title: string) {
    this.productService
        .updateProduct(this.id, {title: title})
        .catch(e => console.log(e));
  }
  updateDescription(description: string) {
    this.productService
        .updateProduct(this.id, {description: description})
        .catch(e => console.log(e));
  }
  updatePrice(price: string) {
    this.productService
        .updateProduct(this.id, {price: price})
        .catch(e => console.log(e));
  }
  updateInStock(inStock: boolean) {
    this.productService
        .updateProduct(this.id, {inStock: inStock})
        .catch(e => console.log(e));
  }
  updateEditDate(editDate: Date) {
    this.productService
        .updateProduct(this.id, {editDate: editDate})
        .catch(e => console.log(e));
  }

  editProduct(){
    this.edited = false;
  }
  onSubmit(){
    this.editDate= new Date();
    this.updateEditDate(this.editDate);
    //console.log("+++"+this.editDate);
    this.edited = true;
  }
  updateStock(inStock: boolean) {
    this.productService
        .updateProduct(this.id, {inStock: inStock})
        .catch(e => console.log(e));
  }
  deleteProduct() {
    this.productService
        .deleteProduct(this.id)
    //.catch(e => console.log(e));
  }


}

