import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Routes';
import { Actions } from 'react-native-router-flux';
import ChatroomIndex from './components/chat/ChatroomIndexContainer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.getToken = this.getToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
  }

  componentWillMount() {
    this.getToken();
  }

  async getToken() {
    try {
      let sessionToken = await this.props.storage.getItem('sessionToken');

      if (!sessionToken) {
        console.log("Token not set");
      } else {
        this.verifyToken(sessionToken)
      }
    } catch (error) {
      console.log("Error finding token");
    }
  }

  async verifyToken(token) {
    const sessionToken = token;

    try {
      const response = await fetch('http://localhost:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
      const res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        Actions.ChatroomIndex();
      } else {
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log("error response: " + error);
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        < Routes />
        {/*<ChatroomIndex />*/}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
};
