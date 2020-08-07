/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME, CHANGE_PASS, LOGIN, SET_TOKEN, SIGN_OUT } from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
export function login() {
  return {
    type: LOGIN,
  };
}

export function changePass(pass) {
  return {
    type: CHANGE_PASS,
    pass,
  };
}

export function setTokenToStores(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function signOuts() {
  return {
    type: SIGN_OUT,
  };
}
