import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedAppsComponent } from './deleted-apps.component';

describe('DeletedAppsComponent', () => {
  let component: DeletedAppsComponent;
  let fixture: ComponentFixture<DeletedAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
