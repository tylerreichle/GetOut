import React from 'react';
import { View, Text, Button, ListView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ChatroomShow from './ChatroomShow';
import ChatroomIndexItem from './ChatroomIndexItem';
import NavBar from '../../nav_bar';

export default class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    const currentUserID = parseInt(this.props.data);
    this.props.fetchCurrentUser(currentUserID);
    this.props.fetchChatrooms();
  }

  render() {
    const chatrooms = this.ds.cloneWithRows(this.props.chatrooms);

    return (
      <View style={styles.chatroomIndex}>
        <ListView
          dataSource={chatrooms}
          enableEmptySections
          renderRow={chatroom => <ChatroomIndexItem chatroom={chatroom} />}
        />
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatroomIndex: {
    flex: 1,
    marginTop: 60,
    borderWidth: 3,
    borderColor: '#000000'
  },
  chatroomButton: {
    height: 75,
    textAlign: 'left',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#000000'
  }
});
