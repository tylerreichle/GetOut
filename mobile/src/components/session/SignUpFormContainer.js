import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { loginUser, signupUser } from '../../actions/session_actions';

import { requestLogin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  signup: (user) => dispatch(signupUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
