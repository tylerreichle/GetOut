import React from 'react';
import { TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

export default class ChatroomIndexItem extends React.Component {
  constructor() {
    super();

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(target, chatroomID) {
    target.preventDefault();
    Actions.ChatroomShow(chatroomID);
  }

  render() {
    const { chatroom } = this.props;

    return (
      <TouchableHighlight onPress={target => this.handlePress(target, chatroom.id)}>

        <View style={styles.chatButton}>
          <Image
            style={styles.profilePic}
            source={{ uri: `${chatroom.otherProfile}` }}
          />
          <Text style={styles.chatUsername}>{chatroom.otherUsername}</Text>
        </View>

      </TouchableHighlight>
    );
  }
}

ChatroomIndexItem.propTypes = {
  chatroom: PropTypes.objectOf(Object).isRequired,
};

const styles = StyleSheet.create({
  chatButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 75,
    borderColor: '#000000',
    borderBottomWidth: 2,
  },
  profilePic: {
    width: 50,
    height: 50,
    margin: 15,
    borderRadius: 25,
  },
  chatUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
