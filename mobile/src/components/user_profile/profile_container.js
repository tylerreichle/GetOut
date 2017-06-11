import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ user }) => ({
  user
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(Profile);