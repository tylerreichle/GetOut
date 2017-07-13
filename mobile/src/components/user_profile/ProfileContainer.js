import { connect } from 'react-redux';
import Profile from './Profile';
import { requestUser } from '../../actions/user_actions';
import { createChatroom } from '../../actions/chatroom_actions';

const mapStateToProps = ({ user, session }) => ({
  user,
  session,
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  createChatroom: chatroom => dispatch(createChatroom(chatroom)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
