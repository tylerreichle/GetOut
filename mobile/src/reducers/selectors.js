import { values } from 'lodash';

export const toArray = (object) => (
  Object.keys(object).map(key => object[key])
);

export const selectChatrooms = ({chatrooms}) => values(chatrooms);

export const chatMessages = (store, chatroomID) => {
  return values(store.messages).filter(message => {
    return message.chatroom_id === chatroomID;
  });
};
