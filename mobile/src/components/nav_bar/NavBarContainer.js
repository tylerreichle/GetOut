import { connect } from 'react-redux';
import NavBar from './NavBar';
import { fetchCurrentUser, logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
  logout: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
