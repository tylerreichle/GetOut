import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  componentWillMount() {
    Actions.refresh(this.props.errors);
  }

  onButtonSubmit() {
    const { username, password } = this.state;
    this.props.login({ username, password });

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
            color: '#cc3333'
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
        Actions.categoriesIndex();
      } else {
        //Handle error
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log("Error fetching token");
    }
  }

  render() {
    return (
      <View style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
      }}
        linkAction={Actions.loginForm}
      >
        <TextInput
          style={{
            borderColor: '#000000',
            borderWidth: 3,
            width: 300,
            height: 50,
            marginBottom: 20,
            alignSelf: 'center',
            textAlign: 'center'
          }}
          autoCapitalize="none"
          id={"username"}
          autoCapitalize="none"
          placeholder={'Username'}
          value={this.state.username}
          onChangeText={(value) => this.handleChange(value, 'username')}
        />

        <TextInput
          style={{
            borderColor: '#000000',
            borderWidth: 3,
            width: 300,
            height: 50,
            alignSelf: 'center',
            marginBottom: 30,
            textAlign: 'center'
          }}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={(value) => this.handleChange(value, 'password')}
          secureTextEntry
        />
        <View
          style={{ backgroundColor: 'green', width: 150, marginBottom: 30 }}>
          <Button
            color='white'
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
