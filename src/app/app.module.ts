import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesModule} from './courses/courses.module';
import {InformationModule} from './information/information.module'
 
 
 

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    InformationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
