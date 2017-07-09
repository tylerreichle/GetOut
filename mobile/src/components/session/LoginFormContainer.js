import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
