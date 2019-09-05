import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in4',
    template: `
        <p>This is signInForm 4</p>
        <form (ngSubmit)="onSubmit(SignInForm)" #SignInForm="ngForm">
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
export class SignInComponent4 {
    onSubmit(SignInForm) {
        console.log(SignInForm);
        throw new Error("Form is invalid!")
    }
}
