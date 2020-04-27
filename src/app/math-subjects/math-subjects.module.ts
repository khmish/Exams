import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Matrix } from 'ml-matrix';
import { MathSubjectsRoutingModule } from './math-subjects-routing.module';
import { MenuMathsComponent } from './menu-maths/menu-maths.component';
import { TruthTableComponent } from './truth-table/truth-table.component';
import { FormsModule } from '@angular/forms';
import { PrimeComponent } from './prime/prime.component';
import { CartesianProductComponent } from './cartesian-product/cartesian-product.component';
import { EuclideanGCDComponent } from './euclidean-gcd/euclidean-gcd.component';
import { LCMComponent } from './lcm/lcm.component';
import { MatrixComponent } from './matrix/matrix.component';
import { SequenceComponent } from './sequence/sequence.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    MenuMathsComponent,
    TruthTableComponent,
    PrimeComponent,
    CartesianProductComponent,
    EuclideanGCDComponent,
    LCMComponent,
    MatrixComponent,
    SequenceComponent,
    TestComponent
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
