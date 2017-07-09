import { connect } from 'react-redux';
import MessageIndex from './MessageIndex';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = store => ({
  currentUser: store.session,
  messages: store.messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageIndex);
