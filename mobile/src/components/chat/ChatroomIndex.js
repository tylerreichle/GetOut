import React from 'react';
import { View, ListView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ChatroomIndexItem from './ChatroomIndexItem';
import NavBar from '../nav_bar/NavBar';

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
    marginTop: 60,
  },
  chatroomButton: {
    height: 75,
    textAlign: 'left',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#000000',
  },
});
