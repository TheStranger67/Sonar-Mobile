import React, { useEffect } from 'react';
import SyncStorage from 'sync-storage';
import { View } from 'react-native';
import { isAuthenticated } from '../../services/auth';

export default function Auth ({ navigation }) {
  useEffect (() => {
    init ();
  }, []);

  const init = async () => {
    await SyncStorage.init ();
    const authenticated = isAuthenticated ();
    navigation.navigate (authenticated ? 'Logged' : 'NotLogged');
  }

  return <View></View>;
}