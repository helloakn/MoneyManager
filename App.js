/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window'); 

import {
  
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList
} from 'react-native';


import HomeScreen from './SourceCode/Screens/Home/HomeScreen';

import Navigator from './SourceCode/Navigator';

const App=() =>  {
 
  
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
