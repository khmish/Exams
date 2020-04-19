import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatSubFundamentalComponent } from './stat-sub-fundamental.component';

describe('StatSubFundamentalComponent', () => {
  let component: StatSubFundamentalComponent;
  let fixture: ComponentFixture<StatSubFundamentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatSubFundamentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatSubFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
