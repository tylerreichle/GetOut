import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChatroomIndexItem extends React.Component {
  constructor() {
    super();

    this.handlePress = this.handlePress.bind(this);
  }


    handlePress(target, chatroomID) {
    target.preventDefault();
    Actions.ChatroomShow(chatroomID);
  }

  render() {
    const { chatroom } = this.props;

    return (
      <Button
        style={styles.chatroomButton}
        title={chatroom.id.toString()}
        onPress={target => this.handlePress(target, chatroom.id)}
      />
    );
  }
}

const styles = StyleSheet.create({
  chatroomButton: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 16,
    margin: 5,
    padding: 5,
    paddingRight: 10,
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'flex-end',
    maxWidth: 200
  }
});
