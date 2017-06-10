import React from 'react';
import { View, Text } from 'react-native';

export default class Message extends React.Component {
  render() {
    const { currentUserId, userId, body } = this.props;

    if (currentUserId === userId) {
      // render sent bubble
      return (
        <View >
          <Text>
            {body}
          </Text>
        </View>
      );
    } else {
      return (
        // render from bubble
        <View>
          <Text>
            {body}
          </Text>
        </View>
      );
    }
  }
}
