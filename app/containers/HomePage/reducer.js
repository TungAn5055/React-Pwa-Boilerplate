import produce from 'immer';
import {
  CHANGE_PASS,
  CHANGE_USERNAME,
  SET_CART_ID_TO_STORE,
  SET_TOKEN,
  SIGN_OUT,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  pass: '',
  token: '',
  cartId: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASS:
        draft.pass = action.pass;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_CART_ID_TO_STORE:
        draft.cartId = action.cartId;
        break;
      case SIGN_OUT:
        draft.token = '';
        draft.cartId = '';
        break;
    }
  });

export default homeReducer;
