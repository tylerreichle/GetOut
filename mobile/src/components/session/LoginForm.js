import React, { Component } from 'react';
import { AsyncStorage, View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      latitude: null,
      longitude: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        Actions.CategoriesIndex(currentUserID);
      } else {
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  handleSubmit() {
    const { username, password, latitude, longitude } = this.state;

    this.props.login({ username, password, latitude, longitude });

    setTimeout(() => {
      this.getToken();
    }, 300);
  }

  handleChange(value, name) {
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  renderError() {
    if (this.props.errors.length > 0) {
      const error = this.props.errors[0];
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
          }}
        >{error}</Text>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.loginForm}>
        <TextInput
          autoFocus
          style={styles.loginInput}
          id={'username'}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          clearButtonMode={'while-editing'}
          value={this.state.username}
          onChangeText={value => this.handleChange(value, 'username')}
        />

        <TextInput
          secureTextEntry
          style={styles.loginInput}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          clearButtonMode={'while-editing'}
          value={this.state.password}
          onChangeText={value => this.handleChange(value, 'password')}
        />

        <View style={styles.loginButton}>
          <Button
            color="#ffffff"
            title="Login"
            onPress={() => this.handleSubmit()}
          />
        </View>
        {this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F0F2EB',
    width: '100%',
    height: '100%',
  },
  loginInput: {
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
  loginButton: {
    width: 150,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FF4242',
    borderColor: '#FF4242',
    borderWidth: 3,
    borderRadius: 5,
  },
});

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

LoginForm.defaultProps = {
  errors: [],
};
