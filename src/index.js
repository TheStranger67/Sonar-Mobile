import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const navStack = createStackNavigator ({
  Main: {
    screen: Main
  }
},
  {
    initialRouteName: 'Main'
  }
);

export default createAppContainer (navStack);
