import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';

export default class LoginForm extends Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  onButtonSubmit() {
    const { first_name, last_name, email, username, password } = this.state;
    this.props.signup({ first_name, last_name, email, username, password });
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
    return (
      <View style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
        marginTop: 200,
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
            alignSelf: 'center',
            textAlign: 'center'
          }}
          id={"first_name"}
          placeholder={'First Name'}
          value={this.state.first_name}
          onChangeText={(value) => this.handleChange(value , 'first_name')}
        />

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
          id={"last_name"}
          placeholder={'Last Name'}
          value={this.state.last_name}
          onChangeText={(value) => this.handleChange(value , 'last_name')}
        />

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
          id={"email"}
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={(value) => this.handleChange(value , 'email')}
        />

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
            marginBottom: 30,
            textAlign: 'center'
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