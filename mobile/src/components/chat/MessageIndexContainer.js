import { connect } from 'react-redux';
import MessageIndex from './MessageIndex';
import { fetchMessages } from '../../actions/message_actions';
import { chatMessages } from '../../reducers/selectors';
// chatMessages(store, ownProps.chatroomID)
// own props to select w/ chatID
const mapStateToProps = (store, ownProps) => ({
  currentUser: store.session,
  messages: store.messages
});

// fetch all messages on mount
const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
