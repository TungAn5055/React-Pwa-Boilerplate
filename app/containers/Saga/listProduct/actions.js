import {
  SET_PRODUCT_LIST,
  LOAD_LIST_PRODUCT,
  ADD_SIMPLE_PRODUCT,
} from './constants';

export function actionSetListProduct(listProducts) {
  return {
    type: SET_PRODUCT_LIST,
    listProducts,
  };
}
export function actionLoadProductByCategories(categoriesId) {
  return {
    type: LOAD_LIST_PRODUCT,
    categoriesId,
  };
}

export function actionAddToCartSimpleProduct(cartId, itemQuantity, itemSkus) {
  return {
    type: ADD_SIMPLE_PRODUCT,
    cartId,
    itemQuantity,
    itemSkus,
  };
}
