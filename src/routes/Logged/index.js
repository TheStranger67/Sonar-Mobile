import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { logout } from '../../services/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Home';

export default createDrawerNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Início',
      drawerIcon: () => (
        <Icon name='home' size={20} color="#fff"></Icon>
      ),
    },
  },
  Logout: {
    screen: ({ navigation }) => {
      logout ();
      return navigation.navigate ('NotLogged');
    },
    navigationOptions: {
      drawerLabel: 'Sair',
      drawerIcon: () => (
        <Icon name='sign-out' size={20} color="#fff"></Icon>
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
