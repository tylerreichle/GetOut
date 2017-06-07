import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Routes from './routes';

export default class App extends Component {
  componentWillMount() {
    let username = AsyncStorage.getItem('username').then(user => console.log(user));
  }

  render() {
    return (
      <View style={ styles.viewStyle}>
        < Routes />
      </View>
    );
  }
}

// TODO:
import { requestCategories } from './actions/category_actions';

window.requestCategories = requestCategories;


const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#008080'
  }
};
