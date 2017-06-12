import React, { Component } from 'react';
import { View, TextInput, Text, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Splash extends Component {


  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      linkAction={ Actions.splash }
      >
        <Image
          source={require('../../images/splash_background.png')}
          style={{
            flex: 2,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height}}
          >
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              alignItems: 'center',
              backgroundColor:'transparent'}}
            >
            <Text style={{
                marginTop: 30,
                marginBottom: 360,
                fontSize: 32,
                fontWeight: 'bold',
                color: 'black',
                opacity: .6
              }}>
              AfternoonDelight
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                width: 150,
                marginTop: 80
              }}>
              <Button
                onPress={ () => Actions.signupForm()}
                title = "Sign Up"
                color = "#8abcdf"
                ></Button>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: 150,
                marginTop: 30
              }}>
              <Button
                onPress={ () => Actions.loginForm()}
                title = "Login"
                color = "#8abcdf"
                ></Button>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
