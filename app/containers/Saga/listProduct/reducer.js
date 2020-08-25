import produce from 'immer';
import { SET_PRODUCT_LIST } from './constants';

export const initialState = {
  listProducts: [],
};

const listProduct = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case SET_PRODUCT_LIST:
        // eslint-disable-next-line no-param-reassign
        draft.listProducts = action.listProducts;
        console.log('dfsfs');
        console.log(action.listProducts);
        break;
      default:
        // need this for default case
        return draft;
    }
  });

export default listProduct;
