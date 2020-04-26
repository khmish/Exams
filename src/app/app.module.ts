import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule }   from '@angular/forms';
import { MathSubjectsComponent } from './math-subjects/math-subjects.component';
import { MathSubjectsModule } from './math-subjects/math-subjects.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StatsSubjectsModule } from './stats-subjects/stats-subjects.module';
import { PowerSetsComponent } from '../app/math-subjects/power-sets/power-sets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MathSubjectsComponent,
    PowerSetsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathSubjectsModule,
    StatsSubjectsModule,
    FormsModule,
    
  ],
  exports: [],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent,]
})
export class AppModule { }
