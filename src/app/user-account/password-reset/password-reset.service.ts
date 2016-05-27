import {Injectable} from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';
import {Store} from '@ngrx/store';

import {ACCOUNT_ACTIVATE_API} from '../../shared/constants/api';
import {JSON_HEADERS} from '../../shared/constants/headers';
import {USER_ACTIVATION_START, USER_ACTIVATION_SUCCESS, USER_ACTIVATION_ERROR} from '../../shared/reducers/user-account-activation';

@Injectable()
export class PasswordResetService {

  constructor(private http: Http, private store: Store<any>) {
  }


}