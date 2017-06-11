import React from 'react';
import { View, Text, Button, ListView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ChatroomShow from './ChatroomShow';

export default class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    const currentUserID = parseInt(this.props.data);
    this.props.fetchCurrentUser(currentUserID);
    this.props.fetchChatrooms();
  }

  handlePress(target, chatroomID) {
    target.preventDefault();
    Actions.ChatroomShow(chatroomID);
  }

  render() {
    const chatrooms = this.ds.cloneWithRows(this.props.chatrooms);

    return (
      <View style={styles.chatroomIndex}>
        <Text style={styles.chatroomIndexHeader}>Chats</Text>

        <ListView
          dataSource={chatrooms}
          enableEmptySections
          renderRow={chatroom =>
            <Button
              title={chatroom.id.toString()}
              onPress={target => this.handlePress(target, chatroom.id)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatroomIndex: {
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
