import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule }   from '@angular/forms';
import { MathSubjectsComponent } from './math-subjects/math-subjects.component';
import { MathSubjectsModule } from './math-subjects/math-subjects.module';

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
    StatsSubjectsModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
