import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => (
  <Image
    source={require('../../images/splash.jpg')}
    style={styles.backgroundImage}
  >

    <Text style={styles.title}>GetOut</Text>

    <View>
      <View style={styles.splashButton}>
        <Button
          onPress={() => Actions.signupForm()}
          title="Sign Up"
          color="white"
        />
      </View>

      <View style={styles.splashButton}>
        <Button
          onPress={() => Actions.loginForm()}
          title="Login"
          color="white"
        />
      </View>
    </View>

    <Text style={styles.subtitle}>Discover your next adventure now</Text>
  </Image>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    padding: 5,
    fontSize: 32,
    color: 'black',
    backgroundColor: 'transparent',
  },
  subtitle: {
    marginBottom: 20,
    padding: 5,
    fontSize: 24,
    color: 'black',
    backgroundColor: 'transparent',
  },
  splashButton: {
    minWidth: 200,
    margin: 5,
    backgroundColor: 'black',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Splash;
