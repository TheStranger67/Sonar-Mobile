import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
import Main from './routes/Main';
import { MenuProvider } from 'react-native-popup-menu';

YellowBox.ignoreWarnings ([
  'Warning: ViewPagerAndroid has been extracted',
]);

export default function App () {
  return (
    <MenuProvider>
      <StatusBar translucent={false} backgroundColor={'#151416'}/>
      <Main/>
    </MenuProvider>
  );
}
