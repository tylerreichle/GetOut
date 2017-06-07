import React, { Component } from 'react';
import { Text, View, ListView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { toArray } from '../../reducers/selectors';

class CategoriesIndex extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    componentWillMount() {
        this.props.requestCategories();
    }

    handlePress() {
        console.log('hi');
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
            </View>
        );
    }
}

export default CategoriesIndex;