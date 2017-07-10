import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { currentUserID, userID, body } = props;

  if (currentUserID === userID) {
    // render sent bubble
    return (
      <Text style={styles.sentMessage}>{body}</Text>
    );
  } else {
    // render from bubble
    return (
      <Text style={styles.receivedMessage}>{body}</Text>
    );
  }
};

Message.propTypes = {
  currentUserID: PropTypes.number.isRequired,
  userID: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  sentMessage: {
    color: '#ffffff',
    backgroundColor: '#0084ff',
    overflow: 'hidden',
    textAlign: 'right',
    fontSize: 16,
    margin: 1,
    marginRight: 5,
    padding: 7,
    borderRadius: 15,
    alignSelf: 'flex-end',
    maxWidth: 200,
  },
  receivedMessage: {
    color: '#000000',
    backgroundColor: '#f1f0f0',
    overflow: 'hidden',
    fontSize: 16,
    padding: 7,
    margin: 1,
    marginLeft: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
    maxWidth: 200,
  },
});

export default Message;
