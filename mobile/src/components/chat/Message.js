import React from 'react';
import { View, Text } from 'react-native';

export default class Message extends React.Component {
  render() {
    const { currentUserID, userID, body } = this.props;

    if (currentUserID === userID) {
      // render sent bubble
      return (
        <Text>
          sent: {body}
        </Text>
      );
    } else {
      return (
        // render from bubble
        <Text>
          received: {body}
        </Text>
      );
    }
  }
}
