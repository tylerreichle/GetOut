export const fetchUser = id => (
  fetch(`http://localhost:3000/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const updateUser = (id, user) => (
  fetch(`http://localhost:3000/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  })
);
