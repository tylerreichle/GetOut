export const usernameChanged = (username) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: username
  };
};

export const passwordChanged = (password) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password
  };
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('http://localhost:3000/token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
      }).then((response) => {
        console.log(response);
        if (response.status === 401) {
          console.log('AUTHENTICATION ERROR!!');
          dispatch({
            type: 'LOGIN_FAILED'
          });
        } else {
          console.log('SUCCESS!!');
          response.json().then(data => {
            console.log(data);
            dispatch({
              type: 'LOGIN_USER_SUCCESS',
              payload: data
            });
          });
        }
      });
  };
};
