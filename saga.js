import { select, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  SUBMIT_CREDENTIALS, AUTH_SUCCESS, AUTH_FAILED,
} from './constants';
import {
  authFailed,
  authSuccess,
  authenticate,
  login,
} from './actions';

const API_BASE_URL = 'http://localhost:8080';
const AUTH_URL = API_BASE_URL + '/api/authenticate';

function* onSubmitCredentials({ credentials }) {
  // Call to Spring auth url

  try {
    const response = yield call(request, AUTH_URL, { // <2>
      method: 'POST',
      headers: {
        'Accept': 'application/json', // eslint-disable-line quote-props
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.login, password: credentials.password })
    });

    yield put(authSuccess(response.id_token));
  } catch (err) {
    yield put(authFailed(err));
  }
}

function* onAuthSuccess({ token }) {
  localStorage.setItem('token', token);
  yield put(authenticate());
}

function* onAuthFailed() {
  yield put(login());
}

export default function* defaultSaga() {
  yield takeLatest(SUBMIT_CREDENTIALS, onSubmitCredentials);
  yield takeLatest(AUTH_SUCCESS, onAuthSuccess);
  yield takeLatest(AUTH_FAILED, onAuthFailed);
}
