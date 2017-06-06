import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';

export default class SessionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  onButtonSubmit() {
    console.log('Submitted: ', `${this.state.username} ${this.state.password}`);
    const { username, password } = this.state;
    this.props.login({ username, password });
  }

  handleChange(value, name) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  renderError() {
    if (this.props.error) {
      return (
        <Text
          style={{
          textAlign: 'center',
          fontSize: 20,
          color: '#cc3333'
        }}
        >Sorry authentication failed!</Text>
      );
    }
    return null;
  }

  render() {
    console.log(this.state);
    return (
      <View style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {this.renderError()}
      <Text style={{
        marginTop: 30,
        marginBottom: 20,
        fontSize: 30
      }}>
      LunchWithStrangers
      </Text>
        <TextInput
          style={{
            borderColor: '#000000',
            borderWidth: 3,
            width: 300,
            height: 50,
            marginBottom: 20,
            alignSelf: 'center'
          }}
          id={"username"}
          placeholder={'Username'}
          value={this.state.username}
          onChangeText={(value) => this.handleChange(value , 'username')}
        />

        <TextInput
          style={{
            borderColor: '#000000',
            borderWidth: 3,
            width: 300,
            height: 50,
            alignSelf: 'center',
            marginBottom: 30
          }}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={(value) => this.handleChange(value, 'password')}
          secureTextEntry
        />
        <View
          style={{backgroundColor: 'green', width: 80}}>
          <Button
            color= 'white'
            title="Login"
            onPress={this.onButtonSubmit.bind(this)}
          >
          </Button>
        </View>
      </View>
    );
  }
}
