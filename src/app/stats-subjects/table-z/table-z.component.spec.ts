import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableZComponent } from './table-z.component';

describe('TableZComponent', () => {
  let component: TableZComponent;
  let fixture: ComponentFixture<TableZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
