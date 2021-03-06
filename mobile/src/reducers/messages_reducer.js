import merge from 'lodash/merge';
import { RECEIVE_MESSAGES, RECEIVE_SINGLE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;

    case RECEIVE_SINGLE_MESSAGE:
      const newState = merge({}, state);
      newState[action.message.id] = action.message;
      return newState;

    default:
      return state;
  }
};

export default messagesReducer;
