import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Home';
import Login from '../../pages/Login';
import Signup from '../Signup';

export default createDrawerNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Início',
      drawerIcon: () => (
        <Icon name='home' size={20} color='#fff'></Icon>
      ),
    },
  },
  
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Entrar',
      drawerIcon: () => (
        <Icon name='sign-in' size={20} color='#fff'></Icon>
      ),
    },
  },

  Signup: {
    screen: Signup,
    navigationOptions: {
      drawerLabel: 'Cadastar-se',
      drawerIcon: () => (
        <Icon name='user-plus' size={20} color='#fff'></Icon>
      ),
    },
  },
},
{
  hideStatusBar: false,
  drawerBackgroundColor: '#151416',
  drawerWidth: 250,
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
