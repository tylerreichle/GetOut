import React, { Component } from 'react';
import { Text, View, ListView, Button, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { toArray } from '../../reducers/selectors';
import { AsyncStorage } from 'react-native';
import CategoriesIndexItem from './categories_index_item_container';
import NavBar from '../../nav_bar';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class CategoriesIndex extends Component {
    constructor(props) {
        super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.handlePress = this.handlePress.bind(this);
  }

    componentWillMount() {
      const currentUserID = parseInt(this.props.data);
      this.props.fetchCurrentUser(currentUserID);
      this.props.requestCategories();
    }

  componentWillReceiveProps(newProps) {
    if (!AsyncStorage.getItem('username')) {
      Actions.splash();
    }
  }

  handlePress(val, id) {
    val.preventDefault();
    Actions.CategoriesIndexItem(id);
  }

  onButtonSubmit() {
    this.props.logout();
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
          justifyContent: 'space-between'
          alignItems: 'center'
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
            enableEmptySections={true}
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
            backgroundColor: "#8abcdf",
            width: Dimensions.get('window').width,
            padding: 10,
            flexDirection: 'column',
            color: 'white',
            fontSize: 24,
            fontFamily: 'Baskerville',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20
          }}
          >Categories</Text>

        <ListView
          dataSource={categories}
          enableEmptySections={true}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={val => this.handlePress(val, rowData.id)}>
              <Image
                style={{ width: 300, height: 50, marginBottom: 20 }}
                source={{ uri: `${rowData.img_url}` }}
              />
          </TouchableHighlight>}
        />

      <View
        style={{
          backgroundColor: '#8abcdf',
          width: 150,
          marginBottom: 30
        }}>
        <Button
          color= 'white'
          onPress={this.onButtonSubmit.bind(this)}
          title="Log Out">
        </Button>
      </View>

      </View>
    );
  }
}
