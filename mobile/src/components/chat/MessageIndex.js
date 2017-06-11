import React from 'react';
import { View, Button, Text, ListView, StyleSheet } from 'react-native';
import Message from './Message';

export default class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillReceiveProps(newProps) {
    if (this.state.messages !== newProps.messages) {
      this.setState({ messages: newProps.messages });
    }
  }

  render() {
    const messages = this.ds.cloneWithRows(this.state.messages);
    const currentUserID = this.props.currentUser.id;

    return (
      <View style={styles.messageIndex}>
        <ListView
          dataSource={messages}
          enableEmptySections
          renderRow={message =>
            <Message
              currentUserID={currentUserID}
              userID={message.user_id}
              body={message.body}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageIndex: {
    margin: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  chatroomIndexHeader: {
    fontSize: 20,
    margin: 10,
  },
});
