import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST_PRODUCT } from './constants';
import { actionSetListProduct } from './actions';
import { GET_PRODUCT_BY_CATEGORY } from '../../../queries/getProductsByCategory.ggl';
// import { GET_PRODUCT_BY_CATEGORY1 } from '../../../queries/getProductsByCategory.graphql';
import { client } from '../../../utils/requestApollo';

export function* getProduct({ categoryId }) {
  // this is code get graphql
  const res = yield client.query({
    query: GET_PRODUCT_BY_CATEGORY,
    variables: { category_id: categoryId, pageSize: 10 },
  });
  const listProducts = res.data.products.items;
  yield put(actionSetListProduct(listProducts));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  yield takeLatest(LOAD_LIST_PRODUCT, getProduct);
}
