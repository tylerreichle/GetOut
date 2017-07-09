import React from 'react';
import { View, ListView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Message from './Message';

export default class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillReceiveProps(newProps) {
    if (this.state.messages !== newProps.messages) {
      this.setState({ messages: newProps.messages });
      this.listView.scrollToEnd({ animated: false });
    }
  }

  render() {
    const messages = this.ds.cloneWithRows(this.state.messages);
    const currentUserID = this.props.currentUser.id;

    return (
      <View style={styles.messagesContainer}>
        <ListView
          style={styles.messageList}
          dataSource={messages}
          enableEmptySections
          ref={(listView) => { this.listView = listView; }}
          onContentSizeChange={() => { this.listView.scrollToEnd({ animated: false }); }}
          renderRow={message => (
            <Message
              currentUserID={currentUserID}
              userID={message.user_id}
              body={message.body}
            />
          )}
        />
      </View>
    );
  }
}

MessageIndex.propTypes = {
  currentUser: PropTypes.objectOf(Object).isRequired,
};

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    borderBottomWidth: 3,
    borderColor: '#000000',
  },
  messageList: {
    flex: 1,
  },
});
