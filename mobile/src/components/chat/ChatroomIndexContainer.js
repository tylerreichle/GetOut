import { connect } from 'react-redux';
import ChatroomIndex from './ChatroomIndex';
import { fetchChatrooms } from '../../actions/chatroom_actions';
import { fetchCurrentUser } from '../../actions/session_actions';
import { selectChatrooms } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  chatrooms: selectChatrooms(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
  fetchChatrooms: () => dispatch(fetchChatrooms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomIndex);
