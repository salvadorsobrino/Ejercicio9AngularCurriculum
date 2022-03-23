import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteCurriculumComponent } from './componenteCurriculum/componenteCurriculum.component';

@NgModule({
  declarations: [	
    AppComponent,
      ComponenteCurriculumComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
