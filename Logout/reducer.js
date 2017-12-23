/*
 *
 * Logout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHECK_TOKEN_BY_NETWORK,
  CHECK_TOKEN_LOCALLY,
  DEAUTHENTICATE,
  LOAD_TOKEN_FROM_LOCAL_STORAGE,
  LOGOUT,
  LOGOUT_FAILED,
} from './constants';

const initialState = fromJS({});

function logoutReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default logoutReducer;
