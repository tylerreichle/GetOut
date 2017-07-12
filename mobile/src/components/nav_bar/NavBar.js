import React from 'react';
import Tabs from 'react-native-tabs';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = props => (
  <View style={styles.container}>
    <Tabs style={styles.navBar}>

      <Text
        name="CategoriesIndex"
        onPress={() => { Actions.CategoriesIndex(); }}
        style={styles.button}
      >Interests</Text>

      <Text
        name="ChatroomIndex"
        onPress={() => { Actions.ChatroomIndex(); }}
        style={styles.button}
      >Messages</Text>

      <Text
        name="Logout"
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
    color: '#F0F2EB',
    fontSize: 20,
    textAlign: 'center',
  },
});

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavBar;
