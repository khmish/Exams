import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { MathSubjectsComponent } from './math-subjects/math-subjects.component';
import { StatsSubjectsComponent } from './stats-subjects/stats-subjects.component';


const routes: Routes = [
  {
    path: 'maths',
    component:MathSubjectsComponent
  },
  {
    path: 'stats',
    component:StatsSubjectsComponent
  }
  // {
  //   path: '**',component
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}