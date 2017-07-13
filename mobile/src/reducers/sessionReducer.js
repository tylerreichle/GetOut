import { RECEIVE_CURRENT_USER, RECEIVE_NULL_USER } from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;

    case RECEIVE_NULL_USER:
      return nullUser;

    default:
      return state;
  }
};

export default sessionReducer;
