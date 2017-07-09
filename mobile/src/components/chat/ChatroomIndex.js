import React from 'react';
import { View, ListView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ChatroomIndexItem from './ChatroomIndexItem';
import NavBar from '../../NavBar';

export default class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    const currentUserID = parseInt(this.props.data, 10);
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

ChatroomIndex.propTypes = {
  fetchChatrooms: PropTypes.func.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  data: PropTypes.number.isRequired,
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
