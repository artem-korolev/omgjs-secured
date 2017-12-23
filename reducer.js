/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTHENTICATE,
  CHECK_TOKEN_BY_NETWORK,
  CHECK_TOKEN_LOCALLY,
  LOAD_TOKEN_FROM_LOCAL_STORAGE,
  LOGIN,
  SUBMIT_CREDENTIALS
} from './constants';

const initialState = fromJS({
  authenticated: false,
  action: null,
  token: null,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOKEN_FROM_LOCAL_STORAGE:
      return state
        .set('token', action.token)
        .set('action', LOAD_TOKEN_FROM_LOCAL_STORAGE);
    case CHECK_TOKEN_LOCALLY:
      return state
        .set('action', CHECK_TOKEN_LOCALLY);
    case AUTHENTICATE:
      return state
        .set('authenticated', true)
        .set('action', AUTHENTICATE);
    case LOGIN:
      return state
        .set('action', LOGIN);
    case SUBMIT_CREDENTIALS:
      return state
        .set('action', SUBMIT_CREDENTIALS);
    case AUTH_SUCCESS:
      return state
        .set('action', AUTH_SUCCESS)
        .set('token', action.token);
    case AUTH_FAILED:
      return state
        .set('action', AUTH_FAILED)
        .set('token', null);
    default:
      return state;
  }
}

export default authReducer;
