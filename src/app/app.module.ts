import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MathSubjectsComponent } from './math-subjects/math-subjects.component';
import { MathSubjectsRoutingModule } from './math-subjects/math-subjects-routing.module';
import { MathSubjectsModule } from './math-subjects/math-subjects.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

    MathSubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathSubjectsRoutingModule,
    MathSubjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
