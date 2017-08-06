import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
  errors,
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
