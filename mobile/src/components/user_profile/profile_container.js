import { connect } from 'react-redux';
import Profile from './profile';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = ({ user, session }, ownProps) => ({
  user, session
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);