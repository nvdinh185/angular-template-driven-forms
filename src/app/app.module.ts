import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoundPipe } from './round.pipe';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe,
    LearnPipeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
