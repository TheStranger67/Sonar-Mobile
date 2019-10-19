import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import Main from './routes/Main';

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
