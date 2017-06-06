import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../actions/session_actions';

import { requestLogin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
