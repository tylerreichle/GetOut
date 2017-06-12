// subscribe to MessageChannel. Append messages to DOM

App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    console.log('message receive ', data);
  },
  
  renderMessage: function(data) {
    console.log('renderMessage ', data);
  }
});