import { createMaterialTopTabNavigator } from 'react-navigation';
import PersonalSignupPage from '../../pages/Signup/Personal';
import CompanySignupPage from '../../pages/Signup/Company';

const signupNavigation = createMaterialTopTabNavigator ({
  PersonalSignupPage: {
    screen: PersonalSignupPage,
    navigationOptions: {
      tabBarLabel: 'Pessoal',
    }
  },

  CompanySignupPage: {
    screen: CompanySignupPage,
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
