import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/session/LoginFormContainer';
import SignUpForm from './components/session/SignUpFormContainer';
import CategoriesIndex from './components/categories/categories_container';
import CategoriesIndexItem from './components/categories/categories_index_item_container';
import Splash from './components/splash/splash';
import Dashboard from './components/dashboard/dashboard';
import ChatroomShow from './components/chat/ChatroomShowContainer';
import ChatroomIndex from './components/chat/ChatroomIndexContainer';
import Profile from './components/user_profile/profile_container';

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

    <Scene
      key='categoriesIndex'
      component={ CategoriesIndex }
      title='Categories Index'
      hideNavBar={true}
    />

    <Scene
      key='CategoriesIndexItem'
      component={ CategoriesIndexItem }
      title='Similar interests...'
      hideNavBar={false}
    />

    <Scene
      key='Profile'
      component={ Profile }
      title='Profile'
      hideNavBar={false}
    />

    <Scene
      key='Dashboard'
      component={ Dashboard }
      title='Dashboard'
      hideNavBar={true}
    />

    <Scene
      key='ChatroomIndex'
      component={ ChatroomIndex }
      title='Messages'
      hideNavBar={false}
    />

    <Scene
      key='ChatroomShow'
      component={ ChatroomShow }
      title='Chat'
      hideNavBar={false}
    />
  </Router>
);

export default Routes;
