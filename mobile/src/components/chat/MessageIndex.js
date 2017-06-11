import React from 'react';
import { View, Button, Text, ListView, StyleSheet } from 'react-native';
import Message from './Message';

export default class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    const messages = this.ds.cloneWithRows(this.props.messages);
    // const currentUserID = this.props.currentUser.id;
    const currentUserID = 1;

    return (
      <View>
        <ListView
          dataSource={messages}
          enableEmptySections
          renderRow={message => <Text>{message.body}</Text>}
        />
      </View>
    );
  }
}
