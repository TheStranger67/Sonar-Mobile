import React from 'react';
import { getUserName } from '../../services/auth';
import { createStackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MenuButton, HeaderSpace } from './styles';
import Profile from '../../pages/Profile';
import PostDetails from '../../pages/PostDetails';

const ProfileNavigation = createStackNavigator ({
  Profile: {
    screen: Profile,
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
      title: `${getUserName ()}`,
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
  }
}, {
  initialRouteName: 'Profile',
});

export default ProfileNavigation;
