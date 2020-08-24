import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgFormComponentServer } from './ng-form/ng-form.component_server';

@NgModule({
  declarations: [
    AppComponent,
    NgFormComponent,
    NgFormComponentServer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
