import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathSubjectsComponent } from './math-subjects.component';

import { TruthTableComponent } from './truth-table/truth-table.component';


const routes: Routes = [
  {
    path: 'maths',
        component: MathSubjectsComponent,
        children: [
            // {
            //     path: 'sub1',
            //     component: Sub1Component
            // },
            {
                path: 'truthTable',
                component: TruthTableComponent
            },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathSubjectsRoutingModule { }
