import React from 'react';
import { View, ListView, Text } from 'react-native';
import Message from './Message';

class MessageIndex extends React.Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props || [];
    // const currentUserID = this.props.currentUser.id;
    const currentUserID = 1;

    return (
      <View>
        {
          messages.forEach(message => {
            return (
              <Message
              currentUserID={currentUserID}
              userID = {message.user_id}
              body={message.body}
            />
            );
          })
        }
      </View>
    );
  }
}

export default MessageIndex;
