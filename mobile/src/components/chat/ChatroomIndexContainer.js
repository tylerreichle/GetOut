import { connect } from 'react-redux';
import ChatroomIndex from './ChatroomIndex';
import { fetchChatrooms } from '../../actions/chatroom_actions';
import { fetchCurrentUser } from '../../actions/session_actions';
import { selectChatrooms } from '../../reducers/selectors';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  chatrooms: selectChatrooms(store)
});

// fetch all messages on mount
const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatroomIndex);
