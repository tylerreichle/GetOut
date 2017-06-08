import React, { Component } from 'react';
import { Text, View, ListView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { toArray } from '../../reducers/selectors';
import { AsyncStorage } from 'react-native';
import CategoriesIndexItem from './categories_index_item_container';

class CategoriesIndex extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.handlePress = this.handlePress.bind(this);
        this.renderList = this.renderList.bind(this);
        this.buttonTitle = this.buttonTitle.bind(this);
    }

    componentWillMount() {
        this.props.requestCategories();
    }

    componentWillReceiveProps(newProps) {
      if (newProps.categories.title) {
        Actions.CategoriesIndexItem();
      }
      if (!AsyncStorage.getItem('username')) {
        Actions.splash();
      }
    }

    buttonTitle(data) {
      if (data.title) {
        return data.title;
      } else {
        return 'title';
      }
    }

    renderList() {
      const categories = this.ds.cloneWithRows(this.props.categories);

      if (this.props.categories) {
        return(
          <ListView
            dataSource={categories}
            enableEmptySections={true}
            renderRow={(rowData) =>
                <Button
                    color= 'white'
                    categories={rowData}
                    title={this.buttonTitle(rowData)}
                    id={rowData.id}
                    onPress={ val => this.handlePress(val, rowData.id) }/>}
            />
        );
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

      return(
          <View
              linkAction={ Actions.categoriesIndex }
              style={{backgroundColor: 'green', width: 150}}>
              <Text>Categories</Text>

              {this.renderList()}

            <Button
              style={{marginTop: 20}}
              onPress={this.onButtonSubmit.bind(this)}
              title="Log Out">
            </Button>
          </View>
      );
    }
}

export default CategoriesIndex;
