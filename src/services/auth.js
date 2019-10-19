import SyncStorage from 'sync-storage';

export const isAuthenticated = () => {
  const token = SyncStorage.get ('userToken') || null;
  return token !== null;
}

export const getToken = () => {
  const token = SyncStorage.get ('userToken') || null;
  return token;
}

export const getUserID = () => SyncStorage.get ('userID');

export const getUserName = () => SyncStorage.get ('userName');

export const login = data => {
  SyncStorage.set ('userToken', data.token);
  SyncStorage.set ('userName', data.userName);
  SyncStorage.set ('userID', String (data.userID));
}

export const logout = () => {
  SyncStorage.remove ('userToken');
  SyncStorage.remove ('userName');
  SyncStorage.remove ('userID');
}
