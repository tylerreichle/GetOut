import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    console.log(action);
      return action.currentUser;
    default:
      return state;
  }
};

export default sessionReducer;
