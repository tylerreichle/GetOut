import { connect } from 'react';
import MessageIndex from 'MessageIndex';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  messages: state.messages
});


const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);