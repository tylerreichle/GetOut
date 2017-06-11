import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const { currentUserID, userID, body } = this.props;

    if (currentUserID === userID) {
      // render sent bubble
      return (
        <Text style={styles.sentMessage}>{body}</Text>
      );
    } else {
      // render from bubble
      return (
        <Text style={styles.receivedMessage}>{body}</Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  sentMessage: {
    color: '#ffffff',
    backgroundColor: '#0084ff',
    overflow: 'hidden',
    textAlign: 'right',
    fontSize: 16,
    margin: 5,
    padding: 5,
    paddingRight: 10,
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'flex-end',
    maxWidth: 200
  },
  receivedMessage: {
    color: '#000000',
    backgroundColor: '#f1f0f0',
    overflow: 'hidden',
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
    margin: 5,
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'flex-start',
    maxWidth: 200
  },
});
