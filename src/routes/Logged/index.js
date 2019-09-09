import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../Home';

const handleLogout = async () => {
  await AsyncStorage.clear ();
}

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
      handleLogout ();
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
