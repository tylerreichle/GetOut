import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { loginUser, signupUser } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  errors,
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
  signup: user => dispatch(signupUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
