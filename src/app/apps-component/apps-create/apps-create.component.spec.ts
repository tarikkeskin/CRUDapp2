import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsCreateComponent } from './apps-create.component';

describe('AppsCreateComponent', () => {
  let component: AppsCreateComponent;
  let fixture: ComponentFixture<AppsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
