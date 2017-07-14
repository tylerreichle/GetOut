export const fetchChatrooms = () => (
  fetch('https://afternoondelight.herokuapp.com/api/chatrooms', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const fetchSingleChatroom = chatroomID => (
  fetch(`https://afternoondelight.herokuapp.com/api/chatrooms/${chatroomID}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const createChatroom = chatroom => (
  fetch(
    'https://afternoondelight.herokuapp.com/api/chatrooms',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chatroom }),
    },
  )
);

export const deleteChatroom = chatroomID => (
  fetch(
    `https://afternoondelight.herokuapp.com/api/chatrooms/${chatroomID}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
);
