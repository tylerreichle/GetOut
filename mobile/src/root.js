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

// // componentWillMount() {
//     this.getToken();
//   }

//  async getToken() {
//     try {
//       let accessToken = await this.props.getItem('token');
//       if(!accessToken) {
//         console.log("Token not set");
//       } else {
//         this.verifyToken(accessToken)
//       }
//     } catch(error) {
//       console.log("Something went wrong");
//     }
//   }

//  async verifyToken(token) {
//     let accessToken = token
//     try {
//       let response = await fetch('http://localhost:3000/api/verify?session%5Baccess_token%5D='+accessToken);
//       let res = await response.text();
//       if (response.status >= 200 && response.status < 300) {
//         //Verified token means user is logged in so we redirect him to home.
//         this.props.navigation.navigate('Tabs');
//       } else {
//           //Handle error
//           let error = res;
//           throw error;
//       }
//     } catch(error) {
//         console.log("error response: " + error);
//     }
//   }

// [8:45] 
// thats the front end, on my login page

// [8:45] 
// def verify_access_token
//     user = User.find_by(auth_token: params[:session][:access_token])
//     if user
//       render text: "verified", status: 200
//     else
//       render text: "Token failed verification", status: 422
//     end
//   end

// [8:45] 
// thats backend action

// get    'verify'  => 'sessions#verify_access_token'