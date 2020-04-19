import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMathsComponent } from './menu-maths.component';

describe('MenuMathsComponent', () => {
  let component: MenuMathsComponent;
  let fixture: ComponentFixture<MenuMathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
