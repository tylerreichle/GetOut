export const fetchMessages = id => (
  fetch(`https://getout-ios.herokuapp.com/api/messages?chatID=${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const createMessage = message => (
  fetch('https://getout-ios.herokuapp.com/api/messages',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    },
  )
);

export const deleteMessage = messageID => (
  fetch(`https://getout-ios.herokuapp.com/api/messages/${messageID}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
);
