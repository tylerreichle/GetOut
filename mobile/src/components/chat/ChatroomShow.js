import React, { Component } from 'react';
import { Text, View, ListView, Button } from 'react-native';

import Pusher from 'pusher-js/react-native';
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

class ChatroomShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ''
    };
  }

  componentWillMount() {
    this.pusher = new Pusher('a82f64a23895b9cddd1a', {
      cluster: 'us2',
      encrypted: true
    });
    this.chatRoom = this.pusher.subscribe('messages');
  }

  componentDidMount() {
    channel.bind('my-event', function(data) {
    alert('An event was triggered with message: ' + data.message);
    });
  }

  componentWIllUnmount() {
    this.chatRoom.unbind();
    this.pusher.unsubscribe(this.chatRoom);
  }

  render() {
    return (
      <View
        style={{ backgroundColor: 'green', width: 150 }}>
        <Text>Chatroom</Text>

      </View>
    );
  }
}

export default ChatroomShow;


var pusher = new Pusher('a82f64a23895b9cddd1a', {
  cluster: 'us2',
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
  alert(data.message);
});