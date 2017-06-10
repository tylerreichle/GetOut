import { connect } from 'react';
import MessageIndex from 'MessageIndex';
import { fetchMessages } from '../../actions/message_actions';
import { chatMessages } from '../../reducers/selectors';

// own props to select w/ chatID
const mapStateToProps = (store, ownProps) => ({
  currentUser: store.currentUser,
  messages: chatMessages(store, ownProps.chatroomID)
});

// fetch all messages on mount
const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
