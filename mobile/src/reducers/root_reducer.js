import { combineReducers } from 'redux';
import userReducer from './user_reducer';

const RootReducer = combineReducers({
  user: userReducer
});

export default RootReducer;
