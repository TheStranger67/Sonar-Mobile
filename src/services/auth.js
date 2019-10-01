import AsyncStorage from '@react-native-community/async-storage';

export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem ('userToken') || null;
  return token !== null;
}

export const getToken = async () => {
  const token = await AsyncStorage.getItem ('userToken') || null;
  return token;
}

export const getUserID = async () => {
  const userID = await AsyncStorage.getItem ('userID');
  return userID;
}

export const getUserName = async () => {
  const userName = await AsyncStorage.getItem ('userName');
  return userName;
}

export const login = async data => {
  await AsyncStorage.multiSet ([
    ['userToken', data.token],
    ['userName', data.userName],
    ['userID', data.userID.toString ()]
  ]);
}

export const logout = async () => {
  await AsyncStorage.clear ();
}
