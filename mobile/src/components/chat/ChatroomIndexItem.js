import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
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
      <TouchableHighlight
        onPress={target => this.handlePress(target, chatroom.id)}>

        <Text style={styles.chatroomButton}>{chatroom.id}</Text>

      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  chatroomButton: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 24,
    height: 50,
    margin: 5,
    padding: 10,
    borderColor: '#000000',
    borderWidth: 3,
  }
});
