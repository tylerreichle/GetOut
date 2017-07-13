import { fetchUser } from '../util/users_api';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const requestUser = id => dispatch => (
  fetchUser(id)
    .then(resp => resp.json())
    .then(json => dispatch(receiveUser(json)))
);
