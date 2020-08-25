import { put, takeLatest } from 'redux-saga/effects';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { LOAD_LIST_PRODUCT } from './constants';
import { actionSetListProduct } from './actions';
import { GET_PRODUCT_BY_CATEGORY } from '../../../queries/getProductsByCategory.ggl';
import { GET_PRODUCT_BY_CATEGORY1 } from '../../../queries/getProductsByCategory.graphql';

const httpLink = new HttpLink({
  uri: process.env.URL_BACKEND_SERVER,
  credentials: 'same-origin',
});

function createApolloClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export function* getProduct({ categoryId }) {
  // this is code get graphql
  // eslint-disable-next-line no-shadow
  const client = createApolloClient();
  const res = yield client.query({
    query: GET_PRODUCT_BY_CATEGORY,
    variables: { category_id: categoryId, pageSize: 10 },
  });

  // console.log('to sagaa');
  // console.log(res.data.products.items);

  const listProducts = res.data.products.items;
  yield put(actionSetListProduct(listProducts));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  yield takeLatest(LOAD_LIST_PRODUCT, getProduct);
}
