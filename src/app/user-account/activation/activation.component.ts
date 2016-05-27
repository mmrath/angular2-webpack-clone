import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {PIPES} from '../../shared/pipes/index';
import {ActivationService} from './activation.service';

@Component({
  selector: 'my-app-account-activation',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: require('./activation.component.html'),
  providers: [ActivationService],
  pipes: [PIPES]
})
export class ActivationComponent implements AfterViewInit {
  key: string;
  activation: Observable<any>;

  constructor(private store: Store<any>, private router: Router, private activationService: ActivationService, routeParams: RouteParams) {
    this.key = routeParams.get('key');
    this.activationService.startActivation(this.key);
    this.activation = this.store.select('user_account_activation');
  }

  ngAfterViewInit() {
    if (typeof this.key !== 'undefined') {
      this.activationService.activate(this.key);
    }
  }

}
