import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './components/session/LoginFormContainer';
import SignUpForm from './components/session/SignUpFormContainer';

export default class App extends Component {

  render() {
    return (
      <View>
        < LoginForm />
      </View>
    );
  }
}

// TODO:
import { requestCategories } from './actions/category_actions';

window.requestCategories = requestCategories;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
