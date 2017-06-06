import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/store';

export default class Root extends React.Component {
  constructor() {
    super();
    // this.store = configureStore();
  }

  render() {
    return(
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}
