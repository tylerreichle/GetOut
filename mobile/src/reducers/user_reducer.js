import { RECEIVE_USER } from '../actions/user_actions';

const nullUser = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
};

const userReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
