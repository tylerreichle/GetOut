import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
  );

  window.store = store;
  return store;
};

export default configureStore;
