import React, { Component } from 'react';
import { View, TextInput, Text, Button, ListView, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      latitude: null,
      longitude: null,
    };

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.renderRow = this.renderRow.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
    );
  }

  onSubmit() {
    const { firstName, lastName, email, username, password, latitude, longitude } = this.state;

    this.props.signup({
      firstName,
      lastName,
      email,
      username,
      password,
      latitude,
      longitude,
    });

    setTimeout(() => {
      this.getToken();
    }, 300);
  }

  async getToken() {
    try {
      const sessionToken = await AsyncStorage.getItem('sessionToken');

      if (!sessionToken) {
        console.log('Session token not set');
      } else {
        this.verifyToken(sessionToken);
      }
    } catch (error) {
      console.log('Error getting session token');
    }
  }

  async verifyToken(token) {
    const sessionToken = token;

    try {
      const response = await fetch(`http://localhost:3000/api/verify?session%5Bsession_token%5D=${sessionToken}`);
      const res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        const currentUserID = await AsyncStorage.getItem('id');
        Actions.categoriesIndex(currentUserID);
      } else {
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  handleChange(value, name) {
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  renderRow(rowData) {
    return (
      <Text
        style={{
          textAlign: 'center',
          fontSize: 12,
          color: '#cc3333',
        }}
      >{rowData}</Text>
    );
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      const errors = this.ds.cloneWithRows(this.props.errors);
      return (
        <View>
          <ListView
            dataSource={errors}
            enableEmptySections
            renderRow={rowData => this.renderRow(rowData)}
          />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.signupContainer}>
        <TextInput
          style={styles.signupInput}
          id={'firstName'}
          placeholder={'First Name'}
          autoCorrect={false}
          value={this.state.firstName}
          onChangeText={value => this.handleChange(value, 'firstName')}
        />

        <TextInput
          style={styles.signupInput}
          id={'lastName'}
          placeholder={'Last Name'}
          autoCorrect={false}
          value={this.state.lastName}
          onChangeText={value => this.handleChange(value, 'lastName')}
        />

        <TextInput
          style={styles.signupInput}
          autoCapitalize="none"
          autoCorrect={false}
          id={'email'}
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={value => this.handleChange(value, 'email')}
        />

          <TextInput
            style={styles.signupInput}
            id={'username'}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={'Username'}
            value={this.state.username}
            onChangeText={value => this.handleChange(value, 'username')}
          />

        <TextInput
          style={styles.signupInput}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={value => this.handleChange(value, 'password')}
          secureTextEntry
        />

        <View style={styles.signupButton}>
          <Button
            color="#8abcdf"
            title="Sign Up"
            onPress={() => this.onSubmit()}
          />
          {this.renderErrors()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8abcdf',
    width: '100%',
    height: '100%',
  },
  signupInput: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: 'white',
    width: 150,
    marginBottom: 20,
  },
});

SignUpForm.propTypes = {
  signup: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

SignUpForm.defaultProps = {
  errors: [],
};
