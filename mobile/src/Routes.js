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
      key="LoginForm"
      component={LoginForm}
      hideNavBar={false}
    />

    <Scene
      key="SignupForm"
      component={SignUpForm}
      hideNavBar={false}
    />

    <Scene
      hideNavBar
      key="CategoriesIndex"
      component={CategoriesIndex}
    />

    <Scene
      hideNavBar
      key="CategoriesIndexItem"
      component={CategoriesIndexItem}
    />

    <Scene
      key="Profile"
      component={Profile}
      hideNavBar={false}
    />

    <Scene
      hideNavBar
      key="Dashboard"
      component={Dashboard}
    />

    <Scene
      hideNavBar
      key="ChatroomIndex"
      component={ChatroomIndex}
    />

    <Scene
      key="ChatroomShow"
      component={ChatroomShow}
      hideNavBar={false}
    />
  </Router>
);

export default Routes;
