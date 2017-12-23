/*
 *
 * Logout actions
 *
 */

import {
  CHECK_TOKEN_BY_NETWORK,
  CHECK_TOKEN_LOCALLY,
  DEAUTHENTICATE,
  LOAD_TOKEN_FROM_LOCAL_STORAGE,
  LOGOUT,
  LOGOUT_FAILED,
} from './constants';

export function checkTokenByNetwork() {
  return {
    type: CHECK_TOKEN_BY_NETWORK
  };
}

export function checkTokenLocally() {
  return {
    type: CHECK_TOKEN_LOCALLY
  };
}

export function deauthenticate() {
  return {
    type: DEAUTHENTICATE
  };
}

export function loadTokenFromLocalStorage() {
  return {
    type: LOAD_TOKEN_FROM_LOCAL_STORAGE
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function logoutFailed() {
  return {
    type: LOGOUT_FAILED
  };
}
