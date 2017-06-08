import * as APIUtil from '../util/session_api_util';
import { AsyncStorage } from 'react-native';
import { receiveErrors } from './error_actions';
import { Actions } from 'react-native-router-flux';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_NULL_USER = 'RECEIVE_NULL_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveNullUser =  () => ({
  type: RECEIVE_NULL_USER
});

export const loginUser = (user) => dispatch => {
  return APIUtil.login(user).then(
    (resp) => {
      resp.json()
        .then((obj) => {
          dispatch(receiveCurrentUser(obj));
          AsyncStorage.setItem('sessionToken', obj.sessionToken);
        });
    }
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  );
};

export const signupUser = (user) => dispatch => {
  return APIUtil.signup(user).then(
    (resp) => {
      resp.json()
      .then((obj) => {
        dispatch(receiveCurrentUser(obj));
        AsyncStorage.setItem('sessionToken', obj.sessionToken);
      });
    }
  );
};

export const logoutUser = () => dispatch => {
  return APIUtil.logout().then(
    () => {
      AsyncStorage.removeItem('sessionToken');
      dispatch(receiveNullUser());
      Actions.splash();
  });
};
