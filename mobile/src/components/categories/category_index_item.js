import React, { Component } from 'react';
import { Text, View, ListView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoriesIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const category_users = this.props.requestSingleCategory(this.props.category_id);
  }

  render() {
    return (
      <View
        linkAction={ Actions.CategoriesIndexItem }>
        <Text>CategoriesIndexItem</Text>
      </View>
    )
  }
}

export default CategoriesIndexItem;