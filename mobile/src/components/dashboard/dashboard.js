import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import NavBar from '../nav_bar/NavBarContainer';

const mapStateToProps = state => ({
  currentUser: state.session,
});

const Dashboard = (props) => {
  const { currentUser } = props;

  return (
    <View
      linkAction={Actions.Dashboard}
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          backgroundColor: '#8abcdf',
          padding: 25,
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        Hi, {currentUser.username}!
          </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: `${currentUser.img_url}` }}
      />
      <Text
        style={{ fontSize: 24 }}
      >
        {currentUser.firstName} {currentUser.lastName}
      </Text>

      <NavBar />
    </View>
  );
};

Dashboard.propTypes = {
  currentUser: PropTypes.objectOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
