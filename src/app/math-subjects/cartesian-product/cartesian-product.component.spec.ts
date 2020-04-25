import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesianProductComponent } from './cartesian-product.component';

describe('CartesianProductComponent', () => {
  let component: CartesianProductComponent;
  let fixture: ComponentFixture<CartesianProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartesianProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartesianProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
