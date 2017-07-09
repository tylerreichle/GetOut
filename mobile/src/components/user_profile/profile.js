import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import geolib from 'geolib';
import NavBar from '../../NavBar';

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

          <View style={styles.descriptionContainer}>
            <Text style={styles.aboutMe}>About Me</Text>
            <Text style={styles.description}>{user.description}</Text>
          </View>

          <View style={styles.chatButton}>
            <Button
              color='#ffffff'
              title="Message"
              onPress={this.createChat}
            />
          </View>

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
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutMe: {
    fontSize: 18,
    margin: 10,
  },
  description: {
    fontSize: 16,
    margin: 10
  },
  chatButton: {
    margin: 10,
    backgroundColor: '#8abcdf',
    borderRadius: 10,
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  }
};
