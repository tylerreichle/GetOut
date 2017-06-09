export const createMessage = message => (
  fetch(
    'http://localhost:3000/api/messages',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message
      })
    }
  )
);

export const deleteMessage = messageID => (
  fetch(
    `http://localhost:3000/api/messages/${messageID}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
);