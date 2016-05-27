import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {PIPES} from '../../shared/pipes/index';
import {PasswordResetService} from './password-reset.service';

@Component({
  selector: 'my-password-reset',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: require('./password-reset.component.html'),
  providers: [PasswordResetService],
  pipes: [PIPES]
})
export class PasswordResetComponent implements AfterViewInit {
  key: string;
  activation: Observable<any>;

  constructor(private store: Store<any>, private router: Router, private passwordResetService: PasswordResetService, routeParams: RouteParams) {
    this.key = routeParams.get('key');
    //this.passwordResetService.startActivation(this.key);
    this.activation = this.store.select('user_account_activation');
  }

  ngAfterViewInit() {
    if (typeof this.key !== 'undefined') {
      //this.activationService.activate(this.key);
    }
  }

}
