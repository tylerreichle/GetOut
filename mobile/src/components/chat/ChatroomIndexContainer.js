import { connect } from 'react-redux';
import ChatroomIndex from './ChatroomIndex';
import { fetchChatrooms } from '../../actions/chatroom_actions';
import { selectChatrooms } from '../../reducers/selectors';

const mapStateToProps = store => ({
  chatrooms: selectChatrooms(store)
});

// fetch all messages on mount
const mapDispatchToProps = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatroomIndex);
