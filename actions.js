/*
 *
 * Auth actions
 *
 */

import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTHENTICATE,
  CHECK_TOKEN_BY_NETWORK,
  CHECK_TOKEN_LOCALLY,
  LOAD_TOKEN_FROM_LOCAL_STORAGE,
  LOGIN,
  SUBMIT_CREDENTIALS,
} from './constants';

export function authFailed() {
  return {
    type: AUTH_FAILED
  };
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  };
}

export function authenticate() {
  return {
    type: AUTHENTICATE
  };
}

export function checkTokenLocally(token) {
  return {
    type: CHECK_TOKEN_LOCALLY,
    token
  };
}

export function checkTokenByNetwork(token) {
  return {
    type: CHECK_TOKEN_BY_NETWORK,
    token
  };
}

export function loadTokenFromLocalStorage(token) {
  return {
    type: LOAD_TOKEN_FROM_LOCAL_STORAGE,
    token
  };
}

export function login() {
  return {
    type: LOGIN
  };
}

export function submitCredentials(credentials) {
  return {
    type: SUBMIT_CREDENTIALS,
    credentials
  };
}
