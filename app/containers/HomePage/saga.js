/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga/effects';
import Cookie from 'js-cookie';
import { SET_TOKEN, SIGN_OUT, GET_TOKEN } from './constants';

/**
 * Github repos request/response handler
 */
export function* setTokenToStore(data) {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // const pass = yield select(makeSelectPass());
  try {
    Cookie.set('customer_access_token', data.token);
  } catch (err) {
    console.log(err);
  }
}

// export function* signOut() {
//   try {
//     Cookie.remove('customer_access_token');
//     window.location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }

// eslint-disable-next-line consistent-return
export function* getTokenFromStore() {
  try {
    // eslint-disable-next-line no-undef
    return Cookies.get('customer_access_token');
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SET_TOKEN, setTokenToStore);
  // yield takeLatest(SIGN_OUT, signOut);
  yield takeLatest(GET_TOKEN, getTokenFromStore);
}
