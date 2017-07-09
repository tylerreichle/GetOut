import merge from 'lodash/merge';
import { RECEIVE_CHATROOMS, RECEIVE_SINGLE_CHATROOM, REMOVE_CHATROOM } from '../actions/chatroom_actions';

const chatroomsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.chatrooms;

    case RECEIVE_SINGLE_CHATROOM:
      newState = merge({}, state);
      newState[action.chatroom.id] = action.chatroom;
      return newState;

    case REMOVE_CHATROOM:
      newState = merge({}, state);
      delete newState[action.chatroom.id];
      return newState;

    default:
      return state;
  }
};

export default chatroomsReducer;
