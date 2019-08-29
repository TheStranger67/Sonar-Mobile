import { createSwitchNavigator } from 'react-navigation';
import Logged from '../Logged';
import NotLogged from '../NotLogged';

export const RootNavigator = (logged = false) => {
  return createSwitchNavigator(
    {
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
      initialRouteName: logged ? 'Logged' : 'NotLogged',
      headerMode: "none",
    }
  );
};
