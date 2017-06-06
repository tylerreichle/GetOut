import React from 'react';
import { Text, View} from 'react-native';

import ProfilePic from './profile_pic';

class Profile extends React.Component {
  render() {
    const { user, profilePic, aboutMe, location } = this.props;

    return (
      <View style={styles.viewStyle}>
        <View style={styles.containerStyle}>

          <ProfilePic userID={user.id}/>
          
          <Text style={styles.username}>
            user
          </Text>

          <Text style={styles.location}> 
            location
          </Text>

          <Text style={styles.aboutMe}>
            aboutMe
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
    padding: 20,
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