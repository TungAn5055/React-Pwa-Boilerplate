import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectListProduct = state => {
  // console.log(state);
  return state.listProduct || initialState;
};

const makeSelectListProduct = () =>
  createSelector(
    selectListProduct,
      state => state.listProducts,
  );

export { selectListProduct, makeSelectListProduct };
