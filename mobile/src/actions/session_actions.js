import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const loginUser = (user) => dispatch => {
  return APIUtil.login(user).then(
    (resp) => {
      resp.json()
        .then((obj) => dispatch(receiveCurrentUser(obj)));
    }
  );
};

export const signupUser = (user) => dispatch => {
  return APIUtil.signup(user).then(
    (resp) => {
      const currentUser = JSON.parse(resp._bodyText);
      dispatch(receiveCurrentUser(currentUser));
    }
  );
};

export const logoutUser = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  );
};
