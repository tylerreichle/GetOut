import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CategoriesIndex extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <View>
                <Text>Categories Index</Text>
            </View>
        );
    }
}

export default CategoriesIndex;