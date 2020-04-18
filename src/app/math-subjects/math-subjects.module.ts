import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathSubjectsRoutingModule } from './math-subjects-routing.module';

import { Sub1Component } from './sub1/sub1.component';
import { MenuMathsComponent } from '../menu-maths/menu-maths.component';


@NgModule({
  declarations: [
     Sub1Component,
     MenuMathsComponent
    ],
  imports: [
    CommonModule,
    MathSubjectsRoutingModule
  ]
})
export class MathSubjectsModule { }
