import { createMaterialTopTabNavigator } from 'react-navigation';
import PersonalPage from '../../pages/Signup/Personal';
import CompanyPage from '../../pages/Signup/Company';

const signupNavigation = createMaterialTopTabNavigator ({
  PersonalPage: {
    screen: PersonalPage,
    navigationOptions: {
      tabBarLabel: 'Pessoal',
    }
  },

  CompanyPage: {
    screen: CompanyPage,
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
