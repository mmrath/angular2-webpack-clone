import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {EMAIL_REGEX_PATTERN} from '../../shared/constants/index';
import {SignupService} from './signup.service';

@Component({
  selector: 'my-app-signup',
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: require('./signup.component.html'),
  providers:[SignupService]
})
export class SignupComponent {

  signupInfo: Observable<any>;
  registrationForm: ControlGroup;
  login: Control;
  email: Control;
  password: Control;

  constructor(private store: Store<any>, private router: Router, private signupService: SignupService, private builder: FormBuilder) {

    this.login = new Control('', Validators.compose([Validators.required, Validators.minLength(4)]));
    this.email = new Control('', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX_PATTERN)]));
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]));

    this.registrationForm = builder.group({
      login: this.login,
      email: this.email,
      password: this.password
    });
    this.signupInfo = this.store.select('signup');
  }

  public signup() {
    if (!this.registrationForm.valid) {
      return;
    }
    this.signupService.signup(this.registrationForm.value);
  }
}
