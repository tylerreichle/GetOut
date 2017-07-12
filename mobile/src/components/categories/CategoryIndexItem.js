import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight, Image, StyleSheet } from 'react-native';
import geolib from 'geolib';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import NavBar from '../nav_bar/NavBarContainer';

class CategoriesIndexItem extends Component {
  constructor(props) {
    super(props);

    this.props.requestSingleCategory(this.props.categoryId);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      users: [],
    };

    this.getDistance = this.getDistance.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser.currentUser === null) {
      Actions.splash();
    }
  }

  onPressButton(val, userId, distance) {
    val.preventDefault();
    Actions.Profile({ userId, distance });
  }

  getDistance(rowData) {
    const initialPoint = {
      latitude: this.props.currentUser.latitude,
      longitude: this.props.currentUser.longitude,
    };

    const distance = geolib.getDistance(
      initialPoint, {
        latitude: rowData.latitude,
        longitude: rowData.longitude,
      }, 10);

    const miles = geolib.convertUnit('mi', distance, 1);

    return miles;
  }

  render() {
    if (this.props.category.users && this.props.currentUser.id) {
      const users = this.ds.cloneWithRows(this.props.category.users);

      return (
        <View
          linkAction={Actions.CategoriesIndexItem}
          style={styles.categoryIndex}
        >
          <Text style={styles.categoryTitle}>{this.props.category.title}</Text>

          <ListView
            style={styles.userList}
            dataSource={users}
            enableEmptySections
            renderRow={rowData => (
              <TouchableHighlight
                style={styles.user}
                title={rowData.username}
                id={rowData.id}
                onPress={val => this.onPressButton(val, rowData.id, this.getDistance(rowData))}
              >
                <View style={styles.userDetail}>
                  <View style={styles.leftSide}>
                    <Image
                      style={styles.profilePic}
                      source={{ uri: `${rowData.img_url}` }}
                    />

                    <Text style={styles.username}>{rowData.username}</Text>
                  </View>
                  <Text style={styles.distance}>{this.getDistance(rowData)} mi. away</Text>
                </View>
              </TouchableHighlight>
            )}
          />
          <NavBar />
        </View>
      );
    }
    return (<View />); // loading
  }
}

const styles = StyleSheet.create({
  categoryIndex: {
    flex: 1,
    marginTop: 60,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'grey',
    padding: 15,
    textAlign: 'center',
  },
  userList: {
    marginBottom: 45,
  },
  user: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  leftSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    margin: 15,
    borderRadius: 25,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distance: {
    marginRight: 10,
    textAlign: 'right',
  },
});

CategoriesIndexItem.propTypes = {
  requestSingleCategory: PropTypes.func.isRequired,
  categoryId: PropTypes.number.isRequired,

  currentUser: PropTypes.shape({
    id: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,

  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CategoriesIndexItem;
