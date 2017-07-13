import React from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ChatroomIndexItem from './ChatroomIndexItem';
import NavBar from '../nav_bar/NavBarContainer';

export default class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    this.props.fetchChatrooms();
  }

  render() {
    const chatrooms = this.ds.cloneWithRows(this.props.chatrooms);

    return (
      <View style={styles.chatroomIndex}>
        <View style={styles.header}>
          <Text style={styles.categoryTitle}>Messages</Text>
        </View>

        <ListView
          enableEmptySections
          dataSource={chatrooms}
          renderRow={chatroom => <ChatroomIndexItem chatroom={chatroom} />}
        />
        <NavBar />
      </View>
    );
  }
}

ChatroomIndex.propTypes = {
  fetchChatrooms: PropTypes.func.isRequired,
  chatrooms: PropTypes.arrayOf(Object),
};

ChatroomIndex.defaultProps = {
  chatrooms: null,
};

const styles = StyleSheet.create({
  chatroomIndex: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#FF4242',
    padding: 15,
    textAlign: 'center',
  },
  chatroomButton: {
    height: 75,
    textAlign: 'left',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#000000',
  },
});
