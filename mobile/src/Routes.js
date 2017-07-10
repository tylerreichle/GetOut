import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/session/LoginFormContainer';
import SignUpForm from './components/session/SignUpFormContainer';
import CategoriesIndex from './components/categories/CategoriesContainer';
import CategoriesIndexItem from './components/categories/CategoriesIndexItemContainer';
import Splash from './components/splash/Splash';
import Dashboard from './components/dashboard/Dashboard';
import ChatroomShow from './components/chat/ChatroomShowContainer';
import ChatroomIndex from './components/chat/ChatroomIndexContainer';
import Profile from './components/user_profile/ProfileContainer';

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: 'white' }}>
    <Scene
      initial
      hideNavBar
      key="splash"
      component={Splash}
      title="Welcome"
    />

    <Scene
      key="loginForm"
      component={LoginForm}
      title="Login"
      hideNavBar={false}
    />

    <Scene
      key="signupForm"
      component={SignUpForm}
      title="Register"
      hideNavBar={false}
    />

    <Scene
      key="categoriesIndex"
      component={CategoriesIndex}
      title="Categories Index"
      hideNavBar
    />

    <Scene
      key="CategoriesIndexItem"
      component={CategoriesIndexItem}
      title="Similar interests..."
      hideNavBar={false}
    />

    <Scene
      key="Profile"
      component={Profile}
      title="Profile"
      hideNavBar={false}
    />

    <Scene
      hideNavBar
      key="Dashboard"
      component={Dashboard}
      title="Dashboard"
    />

    <Scene
      key="ChatroomIndex"
      component={ChatroomIndex}
      title="Messages"
      hideNavBar={false}
    />

    <Scene
      key="ChatroomShow"
      component={ChatroomShow}
      title="Chat"
      hideNavBar={false}
    />
  </Router>
);

export default Routes;
