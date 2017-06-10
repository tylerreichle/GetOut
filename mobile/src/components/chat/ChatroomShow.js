import React from 'react';
import { Text, View } from 'react-native';
import Pusher from 'pusher-js/react-native';

import MessageIndex from './MessageIndex';
import ChatInput from './ChatInputContainer';
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

// Gameplan: Chat returned from backend w/ messages
// selector to extract message info
// pass array into messages index
// new channel event will trigger fetchChat to get new message

// one channel per user? with different listeners per chat

class ChatroomShow extends React.Component {
  constructor(props) {
    super(props);

    this.pusher = new Pusher('a82f64a23895b9cddd1a', {
      cluster: 'us2',
      encrypted: true,
    });
    // this.chatRoom = this.pusher.subscribe('messages');
  }

  componentWillMount() {
    this.props.fetchSingleChatroom(this.props.chatroom.id);
  }

  componentDidMount() {
    const channel = this.pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      alert(`${data.name}: ${data.message}`);
    });
  }

  // componentWIllUnmount() {
  //   // this.chatRoom.unbind();
  //   // this.pusher.unsubscribe(this.chatRoom);
  // }

  render() {
    const { chatroomID } = this.props.chatroom.id;

    return (
      <View
        style={{
          padding: 25,
        }}
      >
        <Text
          style={{
            fontSize: 24,
          }}
        >Chat</Text>

        <MessageIndex chatroomID={chatroomID} />
        <ChatInput chatroomID={chatroomID} />
      </View>
    );
  }
}

export default ChatroomShow;
