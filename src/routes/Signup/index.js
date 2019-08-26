import { createMaterialTopTabNavigator } from 'react-navigation';
import SignupFisPage from '../../pages/Signup/Fis';
import SignupJurPage from '../../pages/Signup/Jur';

const signupNavigation = createMaterialTopTabNavigator ({
  SignupFisPage: {
    screen: SignupFisPage,
    navigationOptions: {
      tabBarLabel: 'Pessoal',
    }
  },

  SignupJurPage: {
    screen: SignupJurPage,
    navigationOptions: {
      tabBarLabel: 'Empresa',
    }
  },
},
{
  tabBarOptions: {
    upperCaseLabel: false,
    optimizationsEnabled: true,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#bebebe',
    style: {
      backgroundColor: '#323035',
    },
    labelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    indicatorStyle: {
      backgroundColor: '#bebebe',
    },
  }
});

export default signupNavigation;
