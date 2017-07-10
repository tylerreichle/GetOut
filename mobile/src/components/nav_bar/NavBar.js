import React, { Component } from 'react';
import Tabs from 'react-native-tabs';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 'CategoriesIndex' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.state.page}
          style={{ backgroundColor: 'grey' }}
          selectedStyle={{ color: 'black' }}
          selectedIconStyle={{ borderTopWidth: 2, borderTopColor: '#26628c' }}
          onSelect={(el) => { this.setState({ page: el.props.name }); }}
        >

          <Text
            name="CategoriesIndex"
            onPress={() => Actions.CategoriesIndex()}
            style={styles.button}
          >Home</Text>

          <Text
            name="ChatroomIndex"
            onPress={() => Actions.ChatroomIndex()}
            style={styles.button}
          >Messages</Text>

          <Text
            name="Logout"
            onPress={this.props.logout}
            style={styles.button}
          >Log Out</Text>

        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};
