import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      latitude: null,
      longitude: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }
    );
  }

  onButtonSubmit() {
    const { username, password, latitude, longitude } = this.state;
    this.props.login({ username, password, latitude, longitude });

    setTimeout(() => {
      this.getToken();
    }, 300);
  }

  handleChange(value, name) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  renderError() {
    if (this.props.errors.length > 0) {
      const error = this.props.errors[0];
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white'
          }}
        >{error}</Text>
      );
    }
    return null;
  }

  async getToken() {
    try {
      let sessionToken = await AsyncStorage.getItem('sessionToken');

      if (!sessionToken) {
        console.log("Session token not set");
      } else {
        this.verifyToken(sessionToken)
      }
    } catch (error) {
      console.log("Error getting session token");
    }
  }

  async verifyToken(token) {
    const sessionToken = token;

    try {
      let response = await fetch('http://localhost:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        currentUserID = await AsyncStorage.getItem('id');
        Actions.categoriesIndex(currentUserID);
      } else {
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  render() {
    return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#8abcdf",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      }}
        linkAction={Actions.loginForm}
      >
      <View
        style={{
          backgroundColor: "white",
          width: 300,
          height: 50,
          marginBottom: 20
        }}>
        <TextInput
          style={{
            width: 300,
            height: 50,
            alignSelf: 'center',
            textAlign: 'center'
          }}
          id={"username"}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={'Username'}
          value={this.state.username}
          onChangeText={(value) => this.handleChange(value, 'username')}
          />
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: 300,
          height: 50,
          marginBottom: 30
        }}>
        <TextInput
          style={{
            width: 300,
            height: 50,
            alignSelf: 'center',
            textAlign: 'center'
          }}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={(value) => this.handleChange(value, 'password')}
          secureTextEntry
          />
      </View>

        <View
          style={{ backgroundColor: 'white', width: 150, marginBottom: 30 }}>
          <Button
            color='#8abcdf'
            title="Login"
            onPress={() => this.onButtonSubmit()}
          >
          </Button>
        </View>
        { this.renderError() }
      </View>
    );
  }
}
