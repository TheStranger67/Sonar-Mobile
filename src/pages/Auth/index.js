import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { isAuthenticated } from '../../services/auth';

export default function Auth ({ navigation }) {
  useEffect (() => {
    getAuth ();
  }, []);

  const getAuth = async () => {
    const authenticated = await isAuthenticated ();
    navigation.navigate (authenticated ? 'Logged' : 'NotLogged');
  }

  return (
    <View>
    </View>
  );
}