import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathSubjectsRoutingModule } from './math-subjects-routing.module';
import { MenuMathsComponent } from './menu-maths/menu-maths.component';
import { TruthTableComponent } from './truth-table/truth-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuMathsComponent,
    TruthTableComponent
  ],
  imports: [
    CommonModule,
    MathSubjectsRoutingModule,
    FormsModule
  ],
  exports:[
    MenuMathsComponent
  ]
})
export class MathSubjectsModule { }
