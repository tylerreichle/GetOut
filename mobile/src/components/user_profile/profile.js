import React from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import geolib from 'geolib';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.props.requestUser(this.props.userId);
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
            {user.description}
          </Text>

        </View>
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
    fontSize: 22,
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

export default Profile;