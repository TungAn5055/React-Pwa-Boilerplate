import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectListProduct = state => state.listProduct || initialState;
const makeSelectListProduct = () =>
  createSelector(
    selectListProduct,
    state => state.listProducts,
  );

export { selectListProduct, makeSelectListProduct };
