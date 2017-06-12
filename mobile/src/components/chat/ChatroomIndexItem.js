import React from 'react';
import { TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
      <TouchableHighlight
        onPress={target => this.handlePress(target, chatroom.id)}>

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

const styles = StyleSheet.create({
  chatButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 75,
    padding: 10,
    borderColor: '#8abcdf',
    borderBottomWidth: 1,
  },
  chatUsername: {
    margin: 5,
    fontSize: 20
  },
  profilePic: {
    width: 50,
    height: 50
  }
});
