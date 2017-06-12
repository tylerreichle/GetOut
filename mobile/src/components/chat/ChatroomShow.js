import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Pusher from 'pusher-js/react-native';

import MessageIndex from './MessageIndexContainer';
import ChatInput from './ChatInputContainer';

export default class ChatroomShow extends React.Component {
  constructor(props) {
    super(props);

    this.pusher = new Pusher('a82f64a23895b9cddd1a', {
      cluster: 'us2',
      encrypted: true,
    });

    this.chatroom = this.pusher.subscribe('my-channel');
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.data);
  }

  componentDidMount() {
    const self = this;
    this.chatroom.bind('my-event', function (data) {
      self.props.fetchMessages(self.props.data);
    });
  }

  componentWIllUnmount() {
    this.chatroom.unbind();
    this.pusher.unsubscribe(this.chatRoom);
  }

  render() {
    const { messages } = this.props;
    const chatroomID = this.props.data;

    return (
      <View style={styles.chatContainer}>
        <MessageIndex messages={messages} />
        <ChatInput chatroomID={chatroomID} />
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    width,
    height,
    marginTop: 60,
  },
});
