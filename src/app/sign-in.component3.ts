import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in3',
  template: `
        <p>This is signInForm 3</p>
        <form (submit)="onSubmit(SignInForm)" #SignInForm="ngForm">
            <input placeholder="Email" ngModel name="email" required />
            <br />
            <p *ngIf="SignInForm.controls.email?.errors?.required && SignInForm.controls.email?.touched">
                Email is required
            </p>
            <br />
            <input type="password" placeholder = "Password" ngModel name="password" />
            <br /><br />
            <button [disabled]="SignInForm.invalid">Submit</button>
        </form>
  `,
})
export class SignInComponent3 {
    onSubmit(SignInForm){
        console.log(SignInForm);
    }
}
