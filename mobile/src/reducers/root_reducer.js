import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import sessionReducer from './sessionReducer';
import categoriesReducer from './categories_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  categories: categoriesReducer
});

export default RootReducer;
