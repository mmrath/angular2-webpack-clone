import { Action, Reducer, Store } from '@ngrx/store';

export const USER_REGISTRATION_IN_PROGRESS = 'USER_REGISTRATION_IN_PROGRESS';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE';
export const USER_REGISTRATION_START = 'USER_REGISTRATION_START';

export const INIT = 'INIT';

var initialState: any = {
  error: null,
  inProgress: false,
  success: false,
};

export const userRegisteration: Reducer<any> = (state = initialState, action: Action = { type: INIT }) => {

  switch (action.type) {
    case USER_REGISTRATION_IN_PROGRESS:
      return Object.assign({}, state,
        { inProgress: true, success: false, error: null });

    case USER_REGISTRATION_SUCCESS:
      return Object.assign({}, { inProgress: false, success: true, error: null });

    case USER_REGISTRATION_FAILURE:
      return Object.assign({}, state, { error: action.payload.error, inProgress: false, success: false });

    case USER_REGISTRATION_START:
      return Object.assign({}, initialState);
    default:
      return state;
  }

};