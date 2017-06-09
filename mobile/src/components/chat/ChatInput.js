import React from 'react';
import { View, TextInput, Keyboard, StyleSheet } from 'react-native';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      body: ''
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    const { chatroomID, createMessage } = this.props;
    const message = {
      body: this.state.body,
      chatroom_id: chatroomID
    };
    createMessage(message);
  }

  render() {
    return (
        <TextInput
          value={this.state.body}
          onChangeText={(body) => this.setState({ body })}
          onSubmitEditing={this.sendMessage}
          placeholder="Type a message"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          style={styles.textInput}
        />
    );
  }
}

export default ChatInput;

const styles = StyleSheet.create({
  textInput: {
    color: '#000000',
    margin: 25
  }
});