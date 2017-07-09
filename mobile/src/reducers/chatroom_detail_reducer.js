import { RECEIVE_SINGLE_CHATROOM } from '../actions/chatroom_actions';

const chatroomDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_CHATROOM:
      return action.chatroom;
    default:
      return state;
  }
};

export default chatroomDetailReducer;
