import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsSubjectsRoutingModule } from './stats-subjects-routing.module';
import { StatSubNormalComponent } from './stat-sub-normal/stat-sub-normal.component';
import { StatSubFundamentalComponent } from './stat-sub-fundamental/stat-sub-fundamental.component';
import { StatsSubjectsComponent } from './stats-subjects.component';
import { MenuStatsComponent } from './menu-stats/menu-stats.component';
import { TableZComponent } from './table-z/table-z.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatSubNormalComponent,
    StatSubFundamentalComponent,
    StatsSubjectsComponent,
    MenuStatsComponent,
    TableZComponent
  ],
  imports: [
    CommonModule,
    StatsSubjectsRoutingModule,
    FormsModule
  ],
  exports: [MenuStatsComponent]
})
export class StatsSubjectsModule { }
