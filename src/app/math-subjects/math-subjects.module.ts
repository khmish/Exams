import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathSubjectsRoutingModule } from './math-subjects-routing.module';
import { MenuMathsComponent } from './menu-maths/menu-maths.component';


@NgModule({
  declarations: [
    MenuMathsComponent
  ],
  imports: [
    CommonModule,
    MathSubjectsRoutingModule
  ],
  exports:[
    MenuMathsComponent
  ]
})
export class MathSubjectsModule { }
