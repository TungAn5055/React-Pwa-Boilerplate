/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest } from 'redux-saga/effects';
import { SET_USER } from './constants';
import { actionSetUserSuccess } from './actions';

// const delay = ms => new Promise(yea => setTimeout(yea, ms));

export function* setUser({ user }) {
  yield put(actionSetUserSuccess(user));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SET_USER, setUser);
}
