import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => (
  <Image
    source={require('../../images/splash.jpg')}
    style={styles.backgroundImage}
  >

    <Text style={styles.title}>AppName</Text>

    <View>
      <View style={styles.splashButton}>
        <Button
          onPress={() => Actions.SignupForm()}
          title="Sign Up"
          color="#F9F2E7"
        />
      </View>

      <View style={styles.splashButton}>
        <Button
          onPress={() => Actions.LoginForm()}
          title="Login"
          color="#F9F2E7"
        />
      </View>
    </View>

    <Text style={styles.subtitle} />
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
    fontSize: 52,
    fontWeight: 'bold',
    color: '#FF4242',
    backgroundColor: 'transparent',
  },
  subtitle: {
    marginBottom: 20,
    padding: 5,
    fontSize: 24,
    color: '#00A8C6',
    backgroundColor: 'transparent',
  },
  splashButton: {
    minWidth: 200,
    margin: 5,
    backgroundColor: '#FF4242',
    borderColor: '#FF4242',
    borderWidth: 3,
    borderRadius: 5,
  },
});

export default Splash;
