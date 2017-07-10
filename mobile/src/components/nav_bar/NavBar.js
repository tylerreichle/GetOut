import React from 'react';
import Tabs from 'react-native-tabs';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = props => (
  <View style={styles.container}>
    <Tabs
      selected={''}
      style={{ backgroundColor: 'grey' }}
      selectedStyle={{}}
      selectedIconStyle={{}}
    >

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
  },
  button: {
    margin: 10,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavBar;
