import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/session/LoginFormContainer';
import SignUpForm from './components/session/SignUpFormContainer';
import Splash from './components/splash/splash';

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: 'white' }}>
    <Scene
      key='splash'
      component={ Splash }
      title="Welcome"
      hideNavBar={true}
      initial
    />

    <Scene
      key='loginForm'
      component={ LoginForm }
      title='Login'
      hideNavBar={false}
    />

    <Scene
      key='signupForm'
      component={ SignUpForm }
      title='Sign Up'
      hideNavBar={false}
    />
  </Router>
);

export default Routes;
