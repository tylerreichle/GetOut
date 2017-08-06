import { connect } from 'react-redux';
import MessageIndex from './MessageIndex';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = ({ session, messages }) => ({
  messages,
  currentUser: session,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageIndex);
