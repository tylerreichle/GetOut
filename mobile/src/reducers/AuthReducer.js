
const INITIAL_STATE = {
  username: '',
  password: '',
  authentication_token: '',
  errorFlag: false,
  spinner: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USERNAME_CHANGED':
      return { ...state, username: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'LOGIN_FAILED':
      return { ...state, errorFlag: true, password: '', spinner: false };
    case 'LOGIN_USER_SUCCESS':
      return { ...state, ...action.payload, ...INITIAL_STATE };
    case 'LOAD_SPINNER':
      return { ...state, spinner: true };
    default:
      return state;
  }
