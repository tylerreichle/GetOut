import { values } from 'lodash';

export const toArray = (object) => (
  Object.keys(object).map(key => object[key])
);

export const selectChatrooms = ({chatrooms}) => values(chatrooms);

export const chatMessages = ({ messages }, chatroomID) => {
  return values(messages).filter(message => {
    return message.chatroom_id === chatroomID;
  });
};
