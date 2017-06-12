import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import geolib from 'geolib';
import NavBar from '../../nav_bar';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.createChat = this.createChat.bind(this);
  }

  componentWillMount() {
    this.props.requestUser(this.props.userId);
  }

  createChat() {
    const chatroom = {
      user_two_id: this.props.userId
    };
    this.props.createChatroom(chatroom);
  }

  render() {
    const { user, profilePic, aboutMe, location } = this.props;

    return (
      <View
        linkAction={ Actions.Profile }
        style={styles.viewStyle}>
        <View style={styles.containerStyle}>

          <Image
            style={{width: 200, height: 200}}
            source={{uri: `${user.img_url}`}}
          />

          <Text style={styles.username}>
            {user.firstName} {user.lastName}
          </Text>

          <Text style={styles.location}>
            {this.props.distance} miles away
          </Text>

          <Text style={styles.aboutMe}>
            About Me
            <Text>{user.description}</Text>
          </Text>

          <Button
            title="Create Chat"
            onPress={this.createChat}
          />

        </View>
        <NavBar />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'space-between',
    flex: 1
  },
  containerStyle: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center'
  },
  username: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#26628c',
    margin: 10
  },
  location: {
    fontSize: 16,
    margin: 10
  },
  aboutMe: {
    fontSize: 18,
    margin: 10
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  }
};
