import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Splash extends Component {

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
      >
      <Text style={{
        marginTop: 30,
        marginBottom: 20,
        fontSize: 30
      }}>
      LunchWithStrangers
      </Text>
        <View
          style={{
            backgroundColor: 'green',
            width: 150,
            marginTop: 30
          }}>
          <Button
          onPress={ () => Actions.signupForm()}
          title = "Sign Up"
          color = "white"
          ></Button>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            width: 150,
            marginTop: 30
          }}>
          <Button
          onPress={ () => Actions.loginForm()}
          title = "Login"
          color = "white"
          ></Button>
        </View>
      </View>
    );
  }
}
