import produce from 'immer';
import {LOAD_LIST_PRODUCT, SET_PRODUCT_LIST} from './constants';

export const initialState = {
  listProducts: []
};

const listProduct = (state = initialState, action) => {
  // produce(state, draft => {
  //   switch (action.type) {
  //     case SET_PRODUCT_LIST:
  //       // eslint-disable-next-line no-param-reassign
  //       draft.listProducts = action.listProducts;
  //       break;
  //     default: // need this for default case
  //       return draft
  //   }
  // });

  switch (action.type) {
    case SET_PRODUCT_LIST:
      // eslint-disable-next-line no-param-reassign
      state.listProducts = action.listProducts;
      return state
    default: // need this for default case
      return state
  }
};

export default listProduct;
