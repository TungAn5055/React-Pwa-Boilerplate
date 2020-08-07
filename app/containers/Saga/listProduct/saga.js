import { put, takeLatest } from 'redux-saga/effects';
import {GET_PRODUCT_LIST, LOAD_LIST_PRODUCT} from './constants';
import { actionSetListProduct } from './actions';

import GET_PRODUCTS_BY_CATEGORY from '../../../queries/getProductsByCategory.graphql';

// const delay = ms => new Promise(yea => setTimeout(yea, ms));

export function* getProduct(action) {
  console.log('annn1');
  console.log(action);

  yield put(actionSetListProduct(listProducts));
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  yield takeLatest(LOAD_LIST_PRODUCT, getProduct);
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
