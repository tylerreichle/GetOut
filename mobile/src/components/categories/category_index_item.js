import React, { Component } from 'react';
import { Text, View, ListView, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoriesIndexItem extends Component {
  constructor(props) {
    super(props);

    this.props.requestSingleCategory(this.props.category_id);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      users: []
    }
  }

  _onPressButton(val, id) {
    console.log(val);
    console.log(id);
    val.preventDefault();
    Actions.Profile(id);
  }

  render() {
    if (this.props.category.users) {
      const users = this.ds.cloneWithRows(this.props.category.users);

      console.log(this.props.category.users);
      return (
        <View
          linkAction={ Actions.CategoriesIndexItem }
          style={{
            marginTop: 63,
            flex: 1,
          }}>
          <Text style={{
            fontSize: 24,
            textAlign: 'center'
          }}>{this.props.category.title}</Text>

          <ListView
            dataSource={users}
            enableEmptySections={true}
            renderRow={(rowData) =>
              <TouchableHighlight
                title={rowData.username}
                id={rowData.id}
                onPress={ val => this._onPressButton(val, rowData.id) }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    flex: 1
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{uri: `${rowData.img_url}`}}
                  />
                  <Text>{rowData.username}</Text>
                </View>
              </TouchableHighlight>}
            />

        </View>
    )} else {
      return (
        <View>
          <Text>Hi</Text>
        </View>
      )
    }
  }
}

export default CategoriesIndexItem;