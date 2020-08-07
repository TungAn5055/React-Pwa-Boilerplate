/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    stateHome => stateHome.username,
  );

const makeSelectPass = () =>
  createSelector(
    selectHome,
    stateHome => stateHome.pass,
  );

export { selectHome, makeSelectUsername, makeSelectPass };
