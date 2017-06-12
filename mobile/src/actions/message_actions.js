import * as MessageUtil from '../util/messages_api';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_SINGLE_MESSAGE = 'RECEIVE_SINGLE_MESSAGE';

export const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveSingleMessage = message => ({
   type: RECEIVE_SINGLE_MESSAGE,
   message
});

// export const fetchMessages = () => dispatch => (
//     MessageUtil.fetchMessages()
//         .then(resp => resp.json())
//         .then(messages => dispatch(receiveMessages(messages)))
// );

export const createMessage = message => dispatch => (
    MessageUtil.createMessage(message)
        .then(resp => resp.json())
        .then(newMessage => dispatch(receiveSingleMessage(newMessage)))
);

export const fetchMessages = id => dispatch => {
  return MessageUtil.fetchMessages(id).then(
    (resp) => {
      if (resp.ok) {
        resp.json()
          .then((obj) => {
            dispatch(receiveMessages(obj));
            dispatch(clearErrors());
          });
      } else {
        resp.json()
          .then((err) => { console.log(err); }
          );
      }
    }
  );
};
