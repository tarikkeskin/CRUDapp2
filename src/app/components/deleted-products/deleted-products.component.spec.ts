import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedProductsComponent } from './deleted-products.component';

describe('DeletedProductsComponent', () => {
  let component: DeletedProductsComponent;
  let fixture: ComponentFixture<DeletedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
