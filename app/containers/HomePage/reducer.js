import produce from 'immer';
import { CHANGE_PASS, CHANGE_USERNAME, SET_TOKEN } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  pass: '',
  token: '',
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
    }
  });

export default homeReducer;
