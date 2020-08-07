import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.user || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUser,
    state => state.user,
  );

const makeSelectNavigationBanner = () =>
  createSelector(
    selectUser,
    state => state.navigationBanner,
  );

const makeSelectTopBanner = () =>
  createSelector(
    selectUser,
    state => state.topBanner,
  );
const makeSelectBottomBanner = () =>
  createSelector(
    selectUser,
    state => state.bottomBanner,
  );
const makeSelectShowMenu = () =>
  createSelector(
    selectUser,
    state => state.showMenu,
  );

const makeSelectAllowShowHistory = () =>
  createSelector(
    selectUser,
    state => state.allowOrderHistory,
  );

export {
  selectUser,
  makeSelectUser,
  makeSelectNavigationBanner,
  makeSelectShowMenu,
  makeSelectTopBanner,
  makeSelectBottomBanner,
  makeSelectAllowShowHistory,
};
