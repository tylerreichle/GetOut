export const fetchUser = id => (
  fetch(`https://getout-ios.herokuapp.com/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const updateUser = (id, user) => (
  fetch(`https://getout-ios.herokuapp.com/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  })
);
