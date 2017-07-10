import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { AsyncStorage, Text, View, ListView, TouchableHighlight, Image, StyleSheet, Dimensions } from 'react-native';
import NavBar from '../nav_bar/NavBar';

export default class CategoriesIndex extends Component {
  constructor(props) {
    super(props);

    const currentUserID = parseInt(this.props.data, 10);
    this.props.fetchCurrentUser(currentUserID);
    this.props.requestCategories();

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillReceiveProps() {
    if (!AsyncStorage.getItem('username')) {
      Actions.splash();
    }
  }

  handlePress(val, id) {
    val.preventDefault();
    Actions.CategoriesIndexItem(id);
  }

  render() {
    const categories = this.ds.cloneWithRows(this.props.categories);

    return (
      <View
        linkAction={Actions.categoriesIndex}
        style={styles.categoriesIndex}
      >
        <Text style={styles.categoriesHeader}>Categories</Text>

        <ListView
          dataSource={categories}
          enableEmptySections
          renderRow={rowData => (
            <TouchableHighlight onPress={val => this.handlePress(val, rowData.id)}>
              <Image
                style={styles.categoriesItem}
                source={{ uri: `${rowData.img_url}` }}
              />
            </TouchableHighlight>
          )}
        />

        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoriesIndex: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoriesHeader: {
    backgroundColor: '#8abcdf',
    width: Dimensions.get('window').width,
    padding: 10,
    flexDirection: 'column',
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  categoriesItem: {
    width: 300,
    height: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

CategoriesIndex.propTypes = {
  data: PropTypes.string.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  requestCategories: PropTypes.func.isRequired,
  categories: PropTypes.objectOf(PropTypes.object).isRequired,
};
