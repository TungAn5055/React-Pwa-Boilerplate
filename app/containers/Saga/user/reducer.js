import produce from 'immer';
import {
  SET_USER,
  SET_USER_NAVIGATION_BANNER,
  SET_USER_SUCCESS,
  SET_USER_MENU,
  SET_USER_BOTTOM_BANNER,
  SET_USER_TOP_BANNER,
  SET_ALLOW_SHOW_ORDER_HISTORY_MENU,
} from './constants';

// The initial state of the App
export const initialState = {
  user: {},
  navigationBanner: [],
  topBanner: [],
  bottomBanner: [],
  showMenu: false,
  allowOrderHistory: -1,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER:
        break;
      case SET_USER_SUCCESS:
        draft.user = action.user;
        break;
      case SET_USER_NAVIGATION_BANNER:
        draft.navigationBanner = action.navigationBanner;
        break;
      case SET_USER_TOP_BANNER:
        draft.topBanner = action.topBanner;
        break;
      case SET_USER_BOTTOM_BANNER:
        draft.bottomBanner = action.bottomBanner;
        break;
      case SET_USER_MENU:
        draft.showMenu = action.showMenu;
        break;
      case SET_ALLOW_SHOW_ORDER_HISTORY_MENU:
        draft.allowOrderHistory = action.allowOrderHistory;
        break;
    }
  });

export default userReducer;
