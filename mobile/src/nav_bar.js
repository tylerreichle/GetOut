import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchCurrentUser, logoutUser } from './actions/session_actions';
import Tabs from 'react-native-tabs';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const mapStateToProps = (state) => ({
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
  logout: () => dispatch(logoutUser())
});

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {page:'CategoriesIndex'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} 
              style={{backgroundColor:'#8abcdf'}}
              selectedStyle={{color:'#26628c'}} 
              selectedIconStyle={{borderTopWidth:2,borderTopColor:'#26628c'}}
              onSelect={el=>{
                this.setState({page:el.props.name});
                }}>
            <Text 
              name="categoriesIndex" 
              onPress={() => Actions.categoriesIndex()}
              style={{
                color:'white',
                fontSize: 16
                }}>Home</Text>
            <Text 
              name="ChatroomIndex"
              onPress={() => Actions.ChatroomIndex()}
              style={{
                color: 'white',
                fontSize: 16
                }}
              >Messages</Text>
            <Text 
              name="LogOut" 
              onPress={this.props.logout}
              style={{
                color: 'white',
                fontSize: 16
                }}>Log Out</Text>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);