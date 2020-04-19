import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathSubjectsComponent } from './math-subjects.component';


const routes: Routes = [
  {
    path: 'maths',
        component: MathSubjectsComponent,
        children: [
            // {
            //     path: 'normal',
            //     component: StatSubNormalComponent
            // },
            // {
            //     path: 'fundamental',
            //     component: StatSubFundamentalComponent
            // }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathSubjectsRoutingModule { }
