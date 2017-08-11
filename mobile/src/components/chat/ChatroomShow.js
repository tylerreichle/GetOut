import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Pusher from 'pusher-js/react-native';
import PropTypes from 'prop-types';

import MessageIndex from './MessageIndexContainer';
import ChatInput from './ChatInputContainer';

export default class ChatroomShow extends React.Component {
  constructor(props) {
    super(props);

    this.pusher = new Pusher('a82f64a23895b9cddd1a', {
      cluster: 'us2',
      encrypted: true,
    });

    this.chatroom = this.pusher.subscribe('chats');
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.data);
  }

  componentDidMount() {
    const self = this;
    this.chatroom.bind('new-message', () => {
      self.props.fetchMessages(self.props.data);
    });
  }

  componentWIllUnmount() {
    this.chatroom.unbind();
    this.pusher.unsubscribe(this.chatroom);
  }

  render() {
    const { messages } = this.props;
    const chatroomID = this.props.data;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.chatContainer}>
        <MessageIndex messages={messages} />
        <ChatInput chatroomID={chatroomID} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    marginTop: 60,
  },
});

ChatroomShow.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  messages: PropTypes.objectOf(Object).isRequired,
  data: PropTypes.number.isRequired,
};
