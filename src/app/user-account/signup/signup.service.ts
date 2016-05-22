import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {SIGNUP_API} from '../../shared/constants/api';
import {SIGNUP_IN_PROGRESS,SIGNUP_SUCCESS,SIGNUP_FAILURE,SIGNUP_START} from '../../shared/reducers/signup';
import {JSON_HEADERS} from '../../shared/constants/headers';


@Injectable()
export class SignupService {
  signupInfo: Observable<any>;

  constructor(private http: Http, private store: Store<any>) {
    this.signupInfo = store.select('signup');
  }

  public signup(item: any): void {
    this.store.dispatch({type: SIGNUP_IN_PROGRESS});
    this.http.post(SIGNUP_API, JSON.stringify(item), JSON_HEADERS)
      .subscribe(
        action => this.store.dispatch({ type: SIGNUP_SUCCESS}),
        err => {
          let errorBody = undefined;
          if ( typeof err._body !== 'undefined' ) {
            errorBody = JSON.parse(err._body);
          }
          this.store.dispatch({type: SIGNUP_FAILURE, payload:{ error: errorBody}});
        }
        );
  }
}