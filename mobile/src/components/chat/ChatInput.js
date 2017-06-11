import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

export default class ChatInput extends React.Component {
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
    this.setState({ body: '' });
    createMessage(message);
  }

  render() {
    return (
      <TextInput
        value={this.state.body}
        style={styles.textInput}
        onChangeText={body => this.setState({ body })}
        onSubmitEditing={this.sendMessage}
        placeholder="Send a message"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
      />
    );
  }
}
ChatInput.propTypes = {
  chatroomID: PropTypes.number.isRequired,
  createMessage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textInput: {
    flex: .5,
    color: '#000000',
    maxHeight: 50,
    margin: 5,
    padding: 5
  },
});
