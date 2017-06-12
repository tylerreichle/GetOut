export const fetchChatrooms = () => (
    fetch(`http://localhost:3000/api/chatrooms`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    })
);

export const fetchSingleChatroom = chatroomID => (
    fetch(`http://localhost:3000/api/chatrooms/${chatroomID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
);

export const createChatroom = chatroom => (
  fetch(
    'http://localhost:3000/api/chatrooms',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatroom
      })
    }
  )
);

export const deleteChatroom = chatroomID => (
  fetch(
    `http://localhost:3000/api/chatrooms/${chatroomID}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
);