import React, { Component } from 'react';
import { Text, View, ListView, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBar from '../../nav_bar';
import geolib from 'geolib';

class CategoriesIndexItem extends Component {
  constructor(props) {
    super(props);

    this.props.requestSingleCategory(this.props.category_id);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      users: []
    };

    this.getDistance = this.getDistance.bind(this);
  }

  _onPressButton(val, userId, distance) {
    val.preventDefault();
    Actions.Profile({userId, distance});
  }

  getDistance(rowData) {
    const initialPoint = {
        latitude: this.props.currentUser.latitude,
        longitude: this.props.currentUser.longitude
      };

    const distance = geolib.getDistance(initialPoint, {
                      latitude: rowData.latitude,
                      longitude: rowData.longitude
                    }, 10);

    const miles = geolib.convertUnit('mi', distance, 2);

    return miles;
  }

  render() {
    if (this.props.category.users) {
      console.log(this.props.category.users);
      const users = this.ds.cloneWithRows(this.props.category.users);

      return (
        <View
          linkAction={Actions.CategoriesIndexItem}
          style={{
            marginTop: 63,
            flex: 1,
          }}>
          <Text style={{
            fontSize: 24,
            color: 'white',
            backgroundColor: '#8abcdf',
            padding: 15,
            textAlign: 'center'
          }}>{this.props.category.title}</Text>

          <ListView
            dataSource={users}
            enableEmptySections={true}
            renderRow={(rowData) =>
              <TouchableHighlight
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#8abcdf',
                }}
                title={rowData.username}
                id={rowData.id}
                onPress={ val => this._onPressButton(val, rowData.id, this.getDistance(rowData)) }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    flex: 1
                  }}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: `${rowData.img_url}` }}
                  />
                  <Text>{this.getDistance(rowData)} mi away</Text>
                  <Text>{rowData.username}</Text>
                </View>
              </TouchableHighlight>}
          />
          <NavBar />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Hi</Text>
        </View>
      );
    }
  }
}

export default CategoriesIndexItem;
