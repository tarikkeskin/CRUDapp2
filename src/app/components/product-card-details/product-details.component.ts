import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ListKeyManager} from '@angular/cdk/a11y';
import {ThemePalette} from '@angular/material';
import {Orientation} from '@ngmodule/material-carousel';

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
  descriptionLength: number;
  public slidesList = new Array<never>(5);
  public showContent = false;
  public listKeyManager: ListKeyManager<any>;
  public timings = '300ms ease-in';
  public autoplay = true;
  public interval = 4000;
  public loop = true;
  public hideArrows = true;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public proportion = 10;
  public images = [
    {
      image: '/assets/img/indir1.jpeg'
    }
  ];
  public slides: any = this.chunk(this.images, 3);
  // public overlayColor = '#f5f5f5';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
  public get currentIndex(): number {
    if (this.listKeyManager) {
      return this.listKeyManager.activeItemIndex;
    }

    return 0;
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.descriptionLength=this.product.description.length;
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
