import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { loginUser, signupUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
  signup: user => dispatch(signupUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
