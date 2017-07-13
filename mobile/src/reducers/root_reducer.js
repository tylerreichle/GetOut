import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import errorReducer from './error_reducer';
import sessionReducer from './sessionReducer';
import categoriesReducer from './categories_reducer';
import categoryReducer from './category_reducer';
import chatroomsRecuder from './chatrooms_reducer';
import chatroomDetailReducer from './chatroom_detail_reducer';
import messagesReducer from './messages_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  user: userReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  chatrooms: chatroomsRecuder,
  chatroom: chatroomDetailReducer,
  messages: messagesReducer,
});

export default RootReducer;
