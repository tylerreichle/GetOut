import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      console.log(currentUser);
      return Object.assign({}, nullUser, {
        currentUser
      });
    default:
      return state;
  }
};

export default sessionReducer;
