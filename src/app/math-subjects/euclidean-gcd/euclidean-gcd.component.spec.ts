import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuclideanGCDComponent } from './euclidean-gcd.component';

describe('EuclideanGCDComponent', () => {
  let component: EuclideanGCDComponent;
  let fixture: ComponentFixture<EuclideanGCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuclideanGCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuclideanGCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
