import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathSubjectsRoutingModule } from './math-subjects-routing.module';
import { MenuMathsComponent } from './menu-maths/menu-maths.component';
import { TruthTableComponent } from './truth-table/truth-table.component';
import { FormsModule } from '@angular/forms';
import { PrimeComponent } from './prime/prime.component';
import { CartesianProductComponent } from './cartesian-product/cartesian-product.component';
import { EuclideanGCDComponent } from './euclidean-gcd/euclidean-gcd.component';
import { LCMComponent } from './lcm/lcm.component';


@NgModule({
  declarations: [
    MenuMathsComponent,
    TruthTableComponent,
    PrimeComponent,
    CartesianProductComponent,
    EuclideanGCDComponent,
    LCMComponent
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
