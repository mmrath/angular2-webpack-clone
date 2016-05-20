import { Component } from '@angular/core';
import { Headers } from '@angular/http';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { Http } from '@angular/http';
import {EMAIL_REGEX_PATTERN} from '../../constants/index';

@Component({
  selector: 'my-app-register',
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: require('./register.component.html'),
})
export class RegisterComponent {


  registrationForm: ControlGroup;
  login: Control;
  email: Control;
  password: Control;

  constructor(private router: Router, private http: Http, private builder: FormBuilder) {

    // Synchronous validators are passed in as the second
    // argument to our Controls
    this.login = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
    this.email = new Control('', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX_PATTERN)]));
    // If we want to use more than one synchronous validators, we need to compose them
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]));

    this.registrationForm = builder.group({
      login: this.login,
      email: this.email,
      password: this.password
    });
  }

  register() {
    if (!this.registrationForm.valid) {
      return;
    }
    let body = JSON.stringify(this.registrationForm.value);

    let contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    this.http.post('/api/register', body, { headers: contentHeaders })
      .subscribe(
        response => {
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}
