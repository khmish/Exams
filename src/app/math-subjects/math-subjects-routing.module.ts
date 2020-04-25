import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  MathSubjectsComponent
} from './math-subjects.component';

import {
  TruthTableComponent
} from './truth-table/truth-table.component';
import {
  PowerSetsComponent
} from './power-sets/power-sets.component';
import {
  PrimeComponent
} from './prime/prime.component';
import { CartesianProductComponent } from './cartesian-product/cartesian-product.component';


const routes: Routes = [{
  path: 'maths',
  component: MathSubjectsComponent,
  children: [
    {
      path: 'truthTable',
      component: TruthTableComponent
    },
    {
      path: 'powerSets',
      component: PowerSetsComponent
    },
    {
      path: 'cartesianProduct',
      component: CartesianProductComponent
    },
    
    {
      path: 'prime',
      component: PrimeComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathSubjectsRoutingModule {}
