import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IpComponent } from './ip.component';
import { IpComponentService } from './ip.component_service';
import { IpService } from './ip.service';
import { IpComponentngOnInit } from './ip.component_ngOnInit';

@NgModule({
  declarations: [
    AppComponent,
    IpComponent,
    IpComponentService,
    IpComponentngOnInit
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
