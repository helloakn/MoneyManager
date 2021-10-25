import {enablePromise,openDatabase} from 'react-native-sqlite-storage';

enablePromise(true);

const GetDBConnection = async () => {
  console.log('----- ----- ----- making handshake with db ----- ----- -----');
  return openDatabase({name: 'MoneyManager.db', location: 'default'});
};

export {GetDBConnection};