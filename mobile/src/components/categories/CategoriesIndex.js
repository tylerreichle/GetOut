import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { AsyncStorage, View, ListView, TouchableHighlight, Image, StyleSheet } from 'react-native';
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
          style={styles.categoriesList}
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
  },
  categoriesList: {
    marginBottom: 50,
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
