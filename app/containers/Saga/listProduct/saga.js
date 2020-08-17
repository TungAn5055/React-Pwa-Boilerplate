import { put, takeLatest, getContext, setContext } from 'redux-saga/effects';
import { LOAD_LIST_PRODUCT } from './constants';
import { actionSetListProduct } from './actions';

import { client } from '../../../utils/requestApollo';

import GET_PRODUCTS_BY_CATEGORY from '../../../queries/getProductsByCategory.graphql';

// const delay = ms => new Promise(yea => setTimeout(yea, ms));

export function* getProduct({ categoriesId }) {
  // this is code get graphql
  const clients = yield getContext('client');
  // const listProducts = ['annn1'];
  // console.log('annn333n');
  // console.log(clients);
  // console.log(client.query);
  yield put(actionSetListProduct(listProducts));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  yield takeLatest(LOAD_LIST_PRODUCT, getProduct);
}

export function* rootSaga() {
  yield setContext({ client });
  /* other sagas */
}

// import { useQuery } from '@apollo/react-hooks';
// import GET_PRODUCTS_POKEMON from '../../queries/getPokemons.graphql';
// import GET_PRODUCTS_BY_SKU from '../../queries/getProductsBySku.graphql';
// const count = 10;
// const {loading, error, data} = useQuery(GET_PRODUCTS_POKEMON, {
//   variables: {first: count}
// });
// if (loading) return null;
// if (error) return <p>Error :(</p>;
// return (
//   <Course data={data} />
// );
