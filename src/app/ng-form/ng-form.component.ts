import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http'

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    const url = 'http://localhost:3000/signin';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(formSignIn.value);
    this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then(resJSON => console.log(resJSON))
  }

  postToExpress() {
    const url = 'http://localhost:3000/signin';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ name: 'Khoa Pham Training' });
    this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.text())
      .then(resText => console.log(resText))
  }
}