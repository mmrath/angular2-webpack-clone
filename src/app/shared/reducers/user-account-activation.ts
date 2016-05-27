import { Action, Reducer } from '@ngrx/store';

export const USER_ACTIVATION_INIT = 'USER_ACTIVATION_INIT';
export const USER_ACTIVATION_START = 'USER_ACTIVATION_START';
export const USER_ACTIVATION_SUCCESS = 'USER_ACTIVATION_SUCCESS';
export const USER_ACTIVATION_ERROR = 'USER_ACTIVATION_ERROR';

let initialState: any = {
  error: undefined,
  success: undefined,
  inProgress: undefined
};

export const user_account_activation: Reducer<any> = (state = initialState, action: Action = {type: USER_ACTIVATION_INIT}) => {

  switch (action.type) {
    case USER_ACTIVATION_SUCCESS:
      return Object.assign({}, { error: undefined, success: true, inProgress: false });

    case USER_ACTIVATION_START:
      return Object.assign({}, {error: undefined, success: false, inProgress: true});

    case USER_ACTIVATION_ERROR:
      return Object.assign({}, {error: action.payload.error, success: false, inProgress: false});

    case USER_ACTIVATION_INIT:
      return Object.assign({}, initialState);

    default:
      return state;
  }

};