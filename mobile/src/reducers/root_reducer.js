import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import errorReducer from './error_reducer';
import sessionReducer from './sessionReducer';
import categoriesReducer from './categories_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  user: userReducer,
  categories: categoriesReducer
});

export default RootReducer;
