import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsSubjectsComponent } from './stats-subjects.component';
import { StatSubNormalComponent } from './stat-sub-normal/stat-sub-normal.component';
import { StatSubFundamentalComponent } from './stat-sub-fundamental/stat-sub-fundamental.component';
import { TableZComponent } from './table-z/table-z.component';


const routes: Routes = [
  {
    path: 'stats',
        component: StatsSubjectsComponent,
        children: [
            {
                path: 'normal',
                component: StatSubNormalComponent
            },
            {
                path: 'fundamental',
                component: StatSubFundamentalComponent
            }
            ,
            {
                path: 'normalTable',
                component: TableZComponent
            }
            
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsSubjectsRoutingModule { }
