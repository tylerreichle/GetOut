import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';

import App from './App';
import configureStore from './store/store';

export default class Root extends React.Component {
  constructor() {
    super();
    
    let username = null;
    AsyncStorage.getItem('username').then(user => {
      username = user.username;
    });

    let store;
    if (username) {
      const preloadedState = { session: { currentUser: username } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    this.state = {
      store: store
    };
  }

  compentWillMount() {
    
  }

  render() {
    console.log(this.state.store);
    return(
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
