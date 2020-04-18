import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathSubjectsComponent } from './math-subjects.component';

describe('MathSubjectsComponent', () => {
  let component: MathSubjectsComponent;
  let fixture: ComponentFixture<MathSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
