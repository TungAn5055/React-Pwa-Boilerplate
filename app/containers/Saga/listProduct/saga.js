import { put, takeLatest } from 'redux-saga/effects';
import { ADD_SIMPLE_PRODUCT, LOAD_LIST_PRODUCT } from './constants';
import { actionSetListProduct } from './actions';
import { GET_PRODUCT_BY_CATEGORY } from '../../../queries/getProductsByCategory.gql';
import { GRAPHQL_ADD_SIMPLE_PRODUCT } from '../../../queries/addSimpleProductsToCart.gql';
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
export function* addSimpleProduct({ cartId, itemQuantity, itemSkus }) {
  console.log('annn');
  console.log(itemSkus);
  // this is code get graphql
  const res = yield client.mutate({
    mutation: GRAPHQL_ADD_SIMPLE_PRODUCT,
    variables: {
      cart_id: cartId,
      quantity: itemQuantity,
      sku: itemSkus,
    },
  });
  console.log('done');
  console.log(res);
  // yield put(actionSetListProduct(listProducts));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  yield takeLatest(LOAD_LIST_PRODUCT, getProduct);
  yield takeLatest(ADD_SIMPLE_PRODUCT, addSimpleProduct);
}
