import React, { useState, useEffect } from 'react';
import { YellowBox, StatusBar } from "react-native";
import { RootNavigator } from './routes/Main';
import AsyncStorage from '@react-native-community/async-storage';


YellowBox.ignoreWarnings([
  "Warning: ViewPagerAndroid has been extracted",
]);

export default function App () {
  const [ logged, setLogged ] = useState (false);
  
  const auth = async () => {
    const userToken = await AsyncStorage.getItem ('userToken');

    if (userToken !== null)
      setLogged (true);
    else
      setLogged (false);
  }

  useEffect (() => {
    auth ();
  }, []);

  const Routes = RootNavigator (logged);
  return (
    <>
      <StatusBar translucent={false} backgroundColor={'#151416'}/>
      <Routes/>
    </>
  );
}
