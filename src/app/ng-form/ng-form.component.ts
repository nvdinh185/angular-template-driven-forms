import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {}
  onSubmit(formSignIn) {
    console.log(formSignIn);
    console.log(formSignIn.value.subject);
    throw new Error("Form is invalid!");
  }
}
