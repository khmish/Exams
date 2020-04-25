import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LCMComponent } from './lcm.component';

describe('LCMComponent', () => {
  let component: LCMComponent;
  let fixture: ComponentFixture<LCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
