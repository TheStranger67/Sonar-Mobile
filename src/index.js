import React from 'react';
import { YellowBox } from "react-native"
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './routes/Home';
import Login from './pages/Login';
import Signup from './routes/Signup';

YellowBox.ignoreWarnings([
  "Warning: ViewPagerAndroid has been extracted",
])

const appNavigation = createDrawerNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Início',
      drawerIcon: () => (
        <Icon name='home' size={20} color="#fff"></Icon>
      ),
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

  Signup: {
    screen: Signup,
    navigationOptions: {
      drawerLabel: 'Cadastrar-se',
      drawerIcon: () => (
        <Icon name='user-plus' size={20} color="#fff"></Icon>
      ),
    },
  },
},
{
  hideStatusBar: false,
  drawerBackgroundColor: '#151416',
  drawerWidth: 210,
  edgeWidth: 20,
  contentOptions: {
    inactiveTintColor: '#bebebe',
    activeTintColor: '#ffffff',
    activeBackgroundColor: '#0062cc',
    labelStyle: {
      fontSize: 16,
    }
  },
});

export default appNavigation;
