import { createSwitchNavigator } from 'react-navigation';
import Logged from '../Logged';
import NotLogged from '../NotLogged';
import Auth from '../../pages/Auth';

export default createSwitchNavigator ({
  Auth: {
    screen: Auth,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Logged: {
    screen: Logged,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  NotLogged: {
    screen: NotLogged,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
}, {
  initialRouteName: 'Auth',
  headerMode: 'none',
});
