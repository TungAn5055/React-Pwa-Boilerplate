import produce from 'immer';
import { persistReducer } from 'redux-persist';
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import {
  CHANGE_PASS,
  CHANGE_USERNAME,
  SET_CART_ID_TO_STORE,
  SET_TOKEN,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  pass: '',
  token: '',
  cartId: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASS:
        draft.pass = action.pass;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_CART_ID_TO_STORE:
        draft.cartId = action.cartId;
    }
  });

// const persistConfig = {
//   key: 'home',
//   storage,
//   // blacklist: ['username'], // khong luu gi
//   // whitelist: ['home'], // chi luu gi
//   stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
// };
// const pReducer = persistReducer(persistConfig, homeReducer);

export default homeReducer;
