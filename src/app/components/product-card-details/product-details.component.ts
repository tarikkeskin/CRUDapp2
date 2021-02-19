import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations : [
    // Here we are defining what are the states our panel can be in
    // and the style each state corresponds to.
    trigger('panelState', [
      state('closed', style({ height: '54px', overflow: 'hidden' })),
      state('open', style({ height: '*' })),
      transition('closed <=> open', animate('700ms ease-in-out')),
    ]),
  ],
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  folded = 'closed';

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    /*
    this.productService
        .updateProduct(this.product.productID,{productID: this.product.productID})
        .catch(e=>console.log(e));

     */
  }

  updateActive(isActive: boolean) {
    this.productService
        .updateProduct(this.product.productID, {isActive: isActive})
        .catch(e => console.log(e));
  }
  deleteProduct() {
    this.productService
        .deleteProduct(this.product.productID)
        //.catch(e => console.log(e));
  }

  // toggleFold function simply changes our folded property
  // between "open" and "closed"
  toggleFold() {
    this.folded = this.folded === 'open' ? 'closed' : 'open';
  }
}
