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
      first_name: firstName,
      last_name: lastName,
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
      const response = await fetch(`https://getout-ios.herokuapp.com/api/verify?session%5Bsession_token%5D=${sessionToken}`);
      const res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        const currentUserID = await AsyncStorage.getItem('id');
        Actions.CategoriesIndex(currentUserID);
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
        <View style={styles.errors}>
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
      <View style={styles.signupForm}>
        <Text style={styles.header}>Create a New Account</Text>

        <TextInput
          style={styles.signupInput}
          id={'firstName'}
          placeholder={'First Name'}
          placeholderTextColor={'black'}
          autoFocus
          autoCorrect={false}
          autoCapitalize={'words'}
          returnKeyType={'next'}
          value={this.state.firstName}
          clearButtonMode={'while-editing'}
          onChangeText={value => this.handleChange(value, 'firstName')}
        />

        <TextInput
          style={styles.signupInput}
          id={'lastName'}
          placeholder={'Last Name'}
          placeholderTextColor={'black'}
          autoCorrect={false}
          autoCapitalize={'words'}
          returnKeyType={'next'}
          value={this.state.lastName}
          clearButtonMode={'while-editing'}
          onChangeText={value => this.handleChange(value, 'lastName')}
        />

        <TextInput
          style={styles.signupInput}
          autoCapitalize="none"
          autoCorrect={false}
          id={'email'}
          placeholder={'Email'}
          placeholderTextColor={'black'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          value={this.state.email}
          clearButtonMode={'while-editing'}
          onChangeText={value => this.handleChange(value, 'email')}
        />

        <TextInput
          style={styles.signupInput}
          id={'username'}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          value={this.state.username}
          returnKeyType={'next'}
          clearButtonMode={'while-editing'}
          onChangeText={value => this.handleChange(value, 'username')}
        />

        <TextInput
          secureTextEntry
          style={styles.signupInput}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          value={this.state.password}
          returnKeyType={'done'}
          clearButtonMode={'while-editing'}
          onChangeText={value => this.handleChange(value, 'password')}
        />

        <View style={styles.signupButton}>
          <Button
            color="black"
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
  signupForm: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2EB',
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  signupInput: {
    width: 300,
    height: 50,
    color: 'black',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#F0F2EB',
    marginBottom: 15,
    borderColor: '#FF4242',
    borderWidth: 2,
    borderRadius: 5,
  },
  signupButton: {
    width: 150,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FF4242',
    borderColor: '#FF4242',
    borderWidth: 3,
    borderRadius: 5,
  },
});

SignUpForm.propTypes = {
  signup: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

SignUpForm.defaultProps = {
  errors: [],
};
