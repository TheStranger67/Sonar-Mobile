import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './routes/Home';
import Login from './pages/Login';

const appNavigation = createDrawerNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Entrar',
      drawerIcon: () => (
        <Icon name='sign-in' size={20} color="#fff"></Icon>
      ),
    },
  },
},
{
  hideStatusBar: false,
  drawerBackgroundColor: '#151416',
  drawerWidth: 210,
  contentOptions: {
    inactiveTintColor: '#bebebe',
    activeTintColor: '#ffffff',
    activeBackgroundColor: '#0062cc',
    labelStyle: {
      fontSize: 16,
    }
  },
});

export default createAppContainer (appNavigation);
