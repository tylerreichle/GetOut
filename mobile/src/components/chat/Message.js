import React from 'react';
import { View, Text } from 'react-native';

export default class Message extends React.Component {
  render() {
    const { currentUserId, userId, body } = this.props;
    if (currentUserId === userId) {
      // render sent bubble
      return (
        <Text>
          {body}
        </Text>
      );
    } else {
      return (
        // render from bubble
        <Text>
          {body}
        </Text>
      );
    }
  }
}
