import React, { Component } from 'react';
import { Text, View, ListView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { toArray } from '../../reducers/selectors';
import { AsyncStorage } from 'react-native';

class CategoriesIndex extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    componentWillMount() {
        this.props.requestCategories();
    }

    componentWillReceiveProps(newProps) {
      if (!AsyncStorage.getItem('username')) {
        Actions.splash();
      }
      // console.log("newProps", newProps);
      // console.log("props", this.props);
      // if(!newProps.currentUser && this.props.currentUser) {
      //   Actions.splash();
      // }
    }

    handlePress() {
        console.log('hi');
    }

    onButtonSubmit() {
      this.props.logout();
    }

    render() {
        const categories = this.ds.cloneWithRows(this.props.categories);

        return(
            <View
                linkAction={ Actions.categoriesIndex }
                style={{backgroundColor: 'green', width: 150}}>
                <Text>Categories</Text>
                <ListView
                    dataSource={categories}
                    enableEmptySections={true}
                    renderRow={(rowData) =>
                        <Button
                            color= 'white'
                            categories={rowData}
                            title={rowData.title}
                            onPress={this.handlePress.bind(this)}/>}
                />
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
