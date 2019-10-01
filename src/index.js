import React from 'react';
import { YellowBox, StatusBar } from "react-native";
import { RootNavigator } from './routes/Main';
import { MenuProvider } from 'react-native-popup-menu';
import { isAuthenticated } from './services/auth';

YellowBox.ignoreWarnings ([
  "Warning: ViewPagerAndroid has been extracted",
]);

export default function App () {  
  const Routes = RootNavigator (isAuthenticated ());
  return (
    <MenuProvider>
      <StatusBar translucent={false} backgroundColor={'#151416'}/>
      <Routes/>
    </MenuProvider>
  );
}
