import produce from 'immer';
import { LOAD_LIST_PRODUCT, SET_PRODUCT_LIST } from './constants';

export const initialState = {
  listProducts: [],
};

const listProduct = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PRODUCT_LIST:
        // eslint-disable-next-line no-param-reassign
        draft.listProducts = state.listProducts.concat(action.listProducts);
        break;
      // default: // need this for default case
      //   return draft
    }
  });

export default listProduct;
