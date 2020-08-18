/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { persistReducer } from 'redux-persist';
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['global', 'language', 'router'], // khong luu gi
    whitelist: ['home'], // chi luu gi
    stateReconciler: autoMergeLevel2,
  };

  const pReducer = persistReducer(persistConfig, rootReducer);

  return pReducer;
}
