import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in5',
    template: `
        <p>This is signInForm 5</p>
        <form (ngSubmit)="onSubmit(SignInForm)" #SignInForm="ngForm">
            <input placeholder="Email" ngModel #txtEmail='ngModel' name="email" required email/>
            <br />
            <p class="error" *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p class="error" *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not valid
            </p>
            <br />
            <input type="password" placeholder = "Password" ngModel name="password" />
            <br /><br />
            <button [disabled]="SignInForm.invalid">Submit</button>
        </form>
  `,
})
export class SignInComponent5 {
    onSubmit(SignInForm) {
        console.log(SignInForm);
        // throw new Error("Form is invalid!")
    }
}
