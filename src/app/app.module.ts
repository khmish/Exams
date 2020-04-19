import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MathSubjectsComponent } from './math-subjects/math-subjects.component';
import { MathSubjectsModule } from './math-subjects/math-subjects.module';
import { StatsSubjectsComponent } from './stats-subjects/stats-subjects.component';
import { MenuStatsComponent } from './stats-subjects/menu-stats/menu-stats.component';
import { StatsSubjectsModule } from './stats-subjects/stats-subjects.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MathSubjectsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathSubjectsModule,
    StatsSubjectsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
