import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';

import App from './App';
import configureStore from './store/store';

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: configureStore()
    };
  }

  compentWillMount() {
    this.getToken();
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App storage={AsyncStorage} />
      </Provider>
    );
  }
}