import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';

export default class App extends Component {

  render() {
    return (
      <View style={ styles.viewStyle}>
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
