import { PageSinc18Module } from './page-sinc18/page-sinc18.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageSinc18Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
