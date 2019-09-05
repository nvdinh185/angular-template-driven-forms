import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in.component';
import { SignInComponent2 } from './sign-in.component2';
import { SignInComponent3 } from './sign-in.component3';
import { SignInComponent4 } from './sign-in.component4';
import { SignInComponent5 } from './sign-in.component5';
import { NgFormComponent } from './ng-form/ng-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignInComponent2,
    SignInComponent3,
    SignInComponent4,
    SignInComponent5,
    NgFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
