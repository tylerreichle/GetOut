import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import * as APIUtil from '../util/session_api_util';
import { fetchUser, updateUser } from '../util/user_API';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_NULL_USER = 'RECEIVE_NULL_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveNullUser = () => ({
  type: RECEIVE_NULL_USER,
});

export const fetchCurrentUser = id => dispatch => (
  fetchUser(id).then(
    (resp) => {
      if (resp.ok) {
        resp.json()
          .then((obj) => {
            dispatch(receiveCurrentUser(obj));
            dispatch(clearErrors());
          });
      } else {
        resp.json()
          .then((err) => { dispatch(receiveErrors(err)); });
      }
    },
  )
);

export const loginUser = user => dispatch => (
  APIUtil.login(user).then(
    (resp) => {
      if (resp.ok) {
        resp.json()
          .then((obj) => {
            dispatch(receiveCurrentUser(obj));
            dispatch(clearErrors());
            AsyncStorage.multiSet([
              ['sessionToken', obj.sessionToken],
              ['id', obj.id.toString()],
            ]);
          });
      } else {
        resp.json()
          .then((err) => { dispatch(receiveErrors(err)); });
      }
    },
  )
);

export const signupUser = user => dispatch => (
  APIUtil.signup(user).then(
    (resp) => {
      if (resp.ok) {
        resp.json()
          .then((obj) => {
            dispatch(receiveCurrentUser(obj));
            dispatch(clearErrors());
            AsyncStorage.multiSet([
              ['sessionToken', obj.sessionToken],
              ['id', obj.id.toString()],
            ]);
          });
      } else {
        resp.json()
          .then((err) => { dispatch(receiveErrors(err)); });
      }
    },
  )
);

export const updateCurrentUser = (id, user) => dispatch => (
  updateUser(id, user).then(
    (resp) => {
      if (resp.ok) {
        resp.json()
          .then((obj) => {
            dispatch(receiveCurrentUser(obj));
            dispatch(clearErrors());
            AsyncStorage.multiSet([
              ['sessionToken', obj.sessionToken],
              ['id', obj.id.toString()],
            ]);
          });
      } else {
        resp.json()
          .then((err) => { dispatch(receiveErrors(err)); });
      }
    },
  )
);

export const logoutUser = () => dispatch => (
  APIUtil.logout().then(() => {
    AsyncStorage.multiRemove(['sessionToken', 'id']);
    dispatch(receiveNullUser());
    Actions.splash();
  })
);
