import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
  );

  persistStore(store, { storage: AsyncStorage });
  window.store = store.getState();
  return store;
};

export default configureStore;
