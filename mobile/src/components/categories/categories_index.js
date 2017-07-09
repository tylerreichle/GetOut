import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage, Text, View, ListView, TouchableHighlight, Image } from 'react-native';
import NavBar from '../../NavBar';

const Dimensions = require('Dimensions');

export default class CategoriesIndex extends Component {
  constructor(props) {
    super(props);

    const currentUserID = parseInt(this.props.data);
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

  onButtonSubmit() {
    this.props.logout();
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
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              backgroundColor: "#8abcdf",
              width: Dimensions.get('window').width,
              padding: 10,
              flexDirection: 'column',
              color: 'white',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 20
            }}
          >Categories</Text>

          <ListView
            dataSource={categories}
            enableEmptySections
            renderRow={(rowData) =>
              <TouchableHighlight onPress={val => this.handlePress(val, rowData.id)}>
                <Image
                  style={{ width: 300, height: 50, marginBottom: 20, alignSelf: 'center' }}
                  source={{ uri: `${rowData.img_url}` }}
                />
              </TouchableHighlight>}
          />

          < NavBar />

        </View>
      </View>
    );
  }
}
