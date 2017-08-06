import { connect } from 'react-redux';
import ChatroomShow from './ChatroomShow';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = ({ currentUser, messages }) => ({
  currentUser,
  messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: id => dispatch(fetchMessages(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomShow);
