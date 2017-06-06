import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/store';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }

  render() {
    if(this.state.isLoading) {
      return null;
    }
    return(
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}