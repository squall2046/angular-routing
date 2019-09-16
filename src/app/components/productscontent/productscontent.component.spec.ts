import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscontentComponent } from './productscontent.component';

describe('ProductscontentComponent', () => {
  let component: ProductscontentComponent;
  let fixture: ComponentFixture<ProductscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
