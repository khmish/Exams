import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { MathSubjectsComponent } from './math-subjects/math-subjects.component';


const routes: Routes = [
  {
    path: '',
    component:MathSubjectsComponent
  },
  {
    path: 'maths',
    loadChildren: () => import('./math-subjects/math-subjects.module').then(m => m.MathSubjectsModule)
  },
  // {
  //   path: '**',component
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}