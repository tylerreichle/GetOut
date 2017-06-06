export const fetchUser = (id) => (
  fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
  })
);
