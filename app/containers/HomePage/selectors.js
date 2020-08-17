/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    state => state.username,
  );

const makeSelectPass = () =>
  createSelector(
    selectHome,
    state => state.pass,
  );

const makeSelectCartId = () =>
  createSelector(
    selectHome,
    state => state.cartId,
  );

const makeSelectToken = () =>
  createSelector(
    selectHome,
    state => state.token,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectPass,
  makeSelectCartId,
  makeSelectToken,
};
