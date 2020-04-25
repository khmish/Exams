import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSetsComponent } from './power-sets.component';

describe('PowerSetsComponent', () => {
  let component: PowerSetsComponent;
  let fixture: ComponentFixture<PowerSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
