import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';

const RootReducer = combineReducers({
  user: {},
  session: sessionReducer
});

export default RootReducer;
