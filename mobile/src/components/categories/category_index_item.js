import React, { Component } from 'react';
import { Text, View, ListView, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoriesIndexItem extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.props.requestSingleCategory(this.props.category_id);
  }

  render() {
    if (this.props.category.users) {
      const users = this.ds.cloneWithRows(this.props.category.users);

      return (
        <View
          linkAction={ Actions.CategoriesIndexItem }
          style={{
            marginTop: 63,
            flex: 1,
            backgroundColor: 'blue'
          }}>
          <Text style={{
            fontSize: 20,
            flex: 2
          }}>{this.props.category.title}</Text>

          <ListView
            dataSource={users}
            enableEmptySections={true}
            renderRow={(rowData) =>
              <Text
                color= 'white'
                categories={rowData}
                title={rowData.username}
                id={rowData.id}
                onPress={ val => this.handlePress(val, rowData.id) }>
                {rowData.username}
                </Text>}
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