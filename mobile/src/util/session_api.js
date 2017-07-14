export const login = user => (
  fetch(
    'https://afternoondelight.herokuapp.com/api/session',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    },
  )
);

export const logout = () => (
  fetch(
    'https://afternoondelight.herokuapp.com/api/session',
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
);

export const signup = user => (
  fetch(
    'https://afternoondelight.herokuapp.com/api/users',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    },
  )
);
