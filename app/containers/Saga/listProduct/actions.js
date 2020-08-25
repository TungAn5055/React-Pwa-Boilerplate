import { SET_PRODUCT_LIST, LOAD_LIST_PRODUCT } from './constants';

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
