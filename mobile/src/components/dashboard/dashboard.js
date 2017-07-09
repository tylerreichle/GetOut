import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBar from '../../NavBar';

const mapStateToProps = (state) => ({
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({

});


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { currentUser } = this.props;

    return (
      <View
        linkAction={ Actions.Dashboard }
        style={{
          flex: 1,
          justifyContent: 'space-between',
          }}>
          <Text
            style={{
              backgroundColor: '#8abcdf',
              padding: 25,
              color: 'white',
              fontSize: 24,
              textAlign: 'center'
            }}>
              Hi, {currentUser.username}!
          </Text>
          <Image
              style={{width: 200, height: 200}}
              source={{uri: `${currentUser.img_url}`}}
            />
          <Text
            style={{
              fontSize: 24
            }}>
            {currentUser.firstName} {currentUser.lastName}
          </Text>

          <NavBar />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
