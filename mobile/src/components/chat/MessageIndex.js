import React from './react';
import { View, ListView, Text } from 'react-native';
import Message from './Message';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.ds.cloneWithRows(this.props.messages);
    const { currentUserID } = this.props.currentUser.id;

    return (
      <View>
        <ListView
          dataSource={messages}
          renderRow={(message) =>
            <Message
              currentUserID={currentUserID}
              userID = {message.user_id}
              body={message.body}
            />}
        />
      </View>
    );
  }
}