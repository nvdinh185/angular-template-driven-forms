import { Component, OnInit } from '@angular/core';
import { NgFormService } from './ng-form.service'

@Component({
  selector: 'app-ng-form-server',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css'],
  providers: [NgFormService]
})
export class NgFormComponentServer implements OnInit {
  constructor(private ngFormService: NgFormService) { }

  ngOnInit() {
  }
  
  onSubmit(formSignIn) {
    this.ngFormService.sendPost(formSignIn.value)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
}