import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatSubNormalComponent } from './stat-sub-normal.component';

describe('StatSubNormalComponent', () => {
  let component: StatSubNormalComponent;
  let fixture: ComponentFixture<StatSubNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatSubNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatSubNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
