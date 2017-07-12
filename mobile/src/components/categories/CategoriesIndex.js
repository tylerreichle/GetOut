import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { AsyncStorage, View, ListView, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
import NavBar from '../nav_bar/NavBarContainer';

export default class CategoriesIndex extends Component {
  constructor(props) {
    super(props);

    const currentUserID = parseInt(this.props.data, 10);

    if (currentUserID) {
      this.props.fetchCurrentUser(currentUserID);
    }
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
      <View style={styles.categoriesIndex}>
        <ListView
          enableEmptySections
          style={styles.categoriesList}
          dataSource={categories}
          renderRow={category => (
            <TouchableHighlight onPress={val => this.handlePress(val, category.id)}>
              <View style={styles.categoriesItem}>
                <Image source={{ uri: `${category.img_url}` }} style={styles.categoryPic}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </Image>
              </View>
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
  },
  categoriesList: {
    marginBottom: 50,
  },
  categoryPic: {
    flex: 1,
    justifyContent: 'flex-end',
    width: null,
    height: null,
    opacity: 0.9,
  },
  categoryTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    // alignSelf: 'center',
    marginLeft: 10,
    marginBottom: 5,
  },
  categoriesItem: {
    width: '100%',
    height: 125,
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
});

CategoriesIndex.propTypes = {
  data: PropTypes.string,
  fetchCurrentUser: PropTypes.func.isRequired,
  requestCategories: PropTypes.func.isRequired,
  categories: PropTypes.objectOf(PropTypes.object).isRequired,
};

CategoriesIndex.defaultProps = {
  data: '',
};
