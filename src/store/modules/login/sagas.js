import { takeLatest, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';

export function* signIn() {
  yield put(signInSuccess());
  // history.push('/dashboard');
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
