import React from 'react';
import { View, Text } from 'react-native';
import ChatroomShow from './ChatroomShow';

export default class ChatroomIndex extends React.Component {

  componentWillMount() {
    this.props.fetchChatrooms();
  }

  render() {
    const { chatrooms } = this.props || [];
    // const currentUserID = this.props.currentUser.id;
    const currentUserID = 1;

    return (
      <View>
        {
          chatrooms.forEach(chatroom => {
            return (
              <ChatroomShow chatroom={chatroom} key={chatroom.id} />
            );
          })
        }
      </View>
    );
  }
}

// click on chatroom
    // handlePress(val, id) {
    //     val.preventDefault();
    //     Actions.CategoriesIndexItem(id);
    // }
