/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_PASS = 'boilerplate/Home/CHANGE_PASS';
export const LOGIN = 'boilerplate/Home/LOGIN';
export const SET_TOKEN = 'boilerplate/Home/SET_TOKEN';
export const GET_TOKEN = 'boilerplate/Home/GET_TOKEN';
export const SIGN_OUT = 'boilerplate/Home/SIGN_OUT';
export const SET_CART_ID_TO_STORE = 'boilerplate/Home/SET_CART_ID_TO_STORE';
