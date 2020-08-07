import {
  SET_USER,
  SET_USER_SUCCESS,
  SET_USER_NAVIGATION_BANNER,
  SET_USER_MENU,
  SET_USER_BOTTOM_BANNER,
  SET_USER_TOP_BANNER,
  SET_ALLOW_SHOW_ORDER_HISTORY_MENU,
} from './constants';

export function actionSetUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function actionSetUserSuccess(user) {
  return {
    type: SET_USER_SUCCESS,
    user,
  };
}

export function actionSetNavigationBanner(navigationBanner) {
  return {
    type: SET_USER_NAVIGATION_BANNER,
    navigationBanner,
  };
}

export function actionSetTopBanner(topBanner) {
  return {
    type: SET_USER_TOP_BANNER,
    topBanner,
  };
}

export function actionSetBottomBanner(bottomBanner) {
  return {
    type: SET_USER_BOTTOM_BANNER,
    bottomBanner,
  };
}

export function actionSetUserMenu(showMenu) {
  return {
    type: SET_USER_MENU,
    showMenu,
  };
}

export function actionSetAllowShowOrderHistoryMenu(allowOrderHistory) {
  return {
    type: SET_ALLOW_SHOW_ORDER_HISTORY_MENU,
    allowOrderHistory,
  };
}
