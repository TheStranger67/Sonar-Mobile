import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuButton, HeaderSpace } from './styles';
import Home from '../../pages/Home';
import PostDetails from '../../pages/PostDetails';

const homeNavigation = createStackNavigator ({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerBackground: (
        <LinearGradient
          colors={['#d81e5b', '#0062cc']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerLeft: (
        <MenuButton onPress={() => navigation.openDrawer ()}>
          <Icon name='bars' size={26} color='#fff'></Icon>
        </MenuButton>
      ),
      headerRight: (
        <HeaderSpace/>
      ),
      title: 'Projeto Sonar',
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
      },
    }),
  },
  PostDetails: {
    screen: PostDetails,
    navigationOptions: ({ navigation }) => ({
      headerBackground: (
        <LinearGradient
          colors={['#d81e5b', '#0062cc']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerLeft: (
        <MenuButton onPress={() => navigation.openDrawer ()}>
          <Icon name='bars' size={26} color='#fff'></Icon>
        </MenuButton>
      ),
      headerRight: (
        <HeaderSpace/>
      ),
      title: 'Detalhes',
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
      },
    }),
  },
}, {
  initialRouteName: 'Home',
});

export default homeNavigation;
