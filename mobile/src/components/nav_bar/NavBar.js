import React from 'react';
import Tabs from 'react-native-tabs';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = props => (
  <View style={styles.container}>
    <Tabs style={styles.navBar}>

      <Text
        onPress={() => { Actions.CategoriesIndex(); }}
        style={styles.button}
      >Interests</Text>

      <Text
        onPress={() => { Actions.ChatroomIndex(); }}
        style={styles.button}
      >Messages</Text>

      <Text
        onPress={props.logout}
        style={styles.button}
      >Log Out</Text>

    </Tabs>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#000000',
    borderTopWidth: 2,
  },
  navBar: {
    backgroundColor: '#FF4242',
  },
  button: {
    margin: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavBar;
