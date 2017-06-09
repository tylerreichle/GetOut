import { connect } from 'react-redux';
import ChatInput from './ChatInput';
import { createMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => ({
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(ChatInput);