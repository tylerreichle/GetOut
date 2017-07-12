import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import NavBar from '../nav_bar/NavBarContainer';

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
      user_two_id: this.props.userId,
    };
    this.props.createChatroom(chatroom);
  }

  render() {
    const { user } = this.props;

    return (
      <View style={styles.viewStyle}>
        <View style={styles.containerStyle}>

          <Image
            style={styles.profilePic}
            source={{ uri: `${user.img_url}` }}
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
              color="#ffffff"
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

Profile.propTypes = {
  requestUser: PropTypes.func.isRequired,
  createChatroom: PropTypes.func.isRequired,
  user: PropTypes.objectOf(Object).isRequired,
  userId: PropTypes.number.isRequired,
  distance: PropTypes.number,
};

Profile.defaultProps = {
  distance: null,
};

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F0F2EB',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  profilePic: {
    borderRadius: 75,
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  username: {
    color: '#FF4242',
    fontSize: 26,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
  },
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  aboutMe: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  description: {
    fontSize: 16,
    margin: 5,
  },
  chatButton: {
    margin: 10,
    backgroundColor: '#FF4242',
    borderColor: '#FF4242',
    borderWidth: 3,
    borderRadius: 5,
  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
};
