import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import sessionReducer from './sessionReducer';

const RootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer
});

export default RootReducer;
