import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSubjectsComponent } from './stats-subjects.component';

describe('StatsSubjectsComponent', () => {
  let component: StatsSubjectsComponent;
  let fixture: ComponentFixture<StatsSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
