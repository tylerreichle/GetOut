import { connect } from 'react-redux';
import ChatroomShow from './ChatroomShow';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  messages: store.messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: id => dispatch(fetchMessages(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomShow);
