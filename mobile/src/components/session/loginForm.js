import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged } from '../../actions/auth_actions';
import _ from 'lodash';

export default class LoginForm extends Component {

  onButtonSubmit() {
    console.log('Submitted: ', `${this.props.username} ${this.props.password}`);
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
  }

  usernameChanged(value) {
    const username = _.lowerCase(value.trim());
    this.props.usernameChanged(username);
  }
  passwordChanged(value) {
    // console.log('Value:', value);
    this.props.passwordChanged(value);
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

  renderButton() {
    if (this.props.spinner) {
      return (
        <ActivityIndicator
          style={{ height: 80 }}
          size="large"
        />
      );
    }
      return (
        <View
          style={{backgroundColor: 'green', width: 80}}>
          <Button
            color= 'white'
            title="Login"
            onPress={this.onButtonSubmit.bind(this)}
          >
          </Button>
        </View>
      );
  }

  render() {
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
          placeholder={'Username'}
          onChangeText={this.usernameChanged.bind(this)}
          value={this.props.username}
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
          onChangeText={this.passwordChanged.bind(this)}
          secureTextEntry
        />
        {this.renderButton()}
      </View>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//     username: state.auth.username,
//     password: state.auth.password,
//     error: state.auth.errorFlag
//   };
// };
//
// export default connect(mapStateToProps, { usernameChanged, passwordChanged })(LoginForm);
