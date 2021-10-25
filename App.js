/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useCallback,useEffect} from 'react';
import {Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window'); 

import {
  
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList
} from 'react-native';


import HomeScreen from './SourceCode/Screens/Home/HomeScreen';

import Navigator from './SourceCode/Navigator';

//import Database from './SourceCode/Class/Database';
//let database = new Database();
import {GetDBConnection,CreateTable} from './SourceCode/Schema'
import {AccountTable} from './SourceCode/Schema/Models/AccountTable';
//import {GetDBConnection} from './SourceCode/Schema/Database';



const App=() =>  {

  const doMigrationCallBack = useCallback(async () => {
    db =await GetDBConnection();
    accountTable = new AccountTable(db);
    accountTable.createAccountTable();
    accountTable.getRowCount().then((r)=>{
      if(r.count==0){
        accountTable.seedData();
      }
    });
    
  },[]);

  useEffect(() => {
    doMigrationCallBack();
  }, [doMigrationCallBack]);

  // let db = null;
  // GetDBConnection().then((value)=>{
  //   db = value;
  //   accountTable = new AccountTable(db);
  //   accountTable.createAccountTable();
  //   accountTable.seedData();
  //   let result = accountTable.getRowCount();
  //   console.log('start result');
  //   console.log(result);
  //   console.log('end result');

  // });

  return (
    <>
      <StatusBar hidden />
      <Navigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor:'red',width: width,height: height,justifyContent: 'center', alignItems: 'center' },
});

export default App;
