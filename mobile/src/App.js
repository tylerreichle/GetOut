import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';

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
      let sessionToken = await this.props.getItem('token');

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
    const accessToken = token;

    try {
      let response = await fetch('http://localhost:3000/api/verify?session%5Baccess_token%5D=' + accessToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect them home.
        this.props.navigation.navigate('Home');
      } else {
        //Handle error
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
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#008080'
  }
};
