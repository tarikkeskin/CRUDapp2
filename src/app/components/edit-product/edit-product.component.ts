import {Component, Input, OnInit} from '@angular/core';
import {AppDateAdapter} from '../../adapter/AppDateAdapter';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() product: Product;

  editted = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }
  updateCategoryID(categoryID: string) {
    this.productService
        .updateProduct(this.product.productID, {categoryID: categoryID})
        .catch(e => console.log(e));
  }
  updateTitle(title: string) {
    this.productService
        .updateProduct(this.product.productID, {title: title})
        .catch(e => console.log(e));
  }
  updateDescription(description: string) {
    this.productService
        .updateProduct(this.product.productID, {description: description})
        .catch(e => console.log(e));
  }
  updatePrice(price: string) {
    this.productService
        .updateProduct(this.product.productID, {price: price})
        .catch(e => console.log(e));
  }
  updateInStock(inStock: boolean) {
    this.productService
        .updateProduct(this.product.productID, {inStock: inStock})
        .catch(e => console.log(e));
  }
  updateCreateDate(createDate: Date) {
    this.productService
        .updateProduct(this.product.productID, {createDate: createDate})
        .catch(e => console.log(e));
  }
  updateEditDate(editDate: Date) {
    this.productService
        .updateProduct(this.product.productID, {editDate: editDate})
        .catch(e => console.log(e));
  }
  updateDeleteDate(deleteDate: Date) {
    this.productService
        .updateProduct(this.product.productID, {deleteDate: deleteDate})
        .catch(e => console.log(e));
  }
  editProduct(){
    this.editted = false;
  }
  onSubmit(){
    this.editted = true;
  }

}

