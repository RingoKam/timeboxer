import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeboxerModule } from './timeboxer/timeboxer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TimeboxerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
