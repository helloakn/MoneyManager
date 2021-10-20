
import React from 'react';

import {
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
} from 'react-native';

import MainLayout from '../../../Layouts/MainLayout';


import List from "../../../Components/List";

const DATA = [
  {
    id: '1bd7acbea-c1b1-46c42-aed5-3ad53abb28ba',
    title: 'Expense',
    type: 'Expense',
  },
  {
    id: '23ac68afc-c605-48d53-a4f8-fbd91aa97f63',
    title: 'Income',
    type: 'Income',
  },
  {
    id: '358694a0f-3da1-471f-bd96-1455322571e29d72',
    title: 'Expense',
    type: 'Expense',
  },
  {
    id: '45869426a0f-3da1-471f-bd976-145571e229d72',
    title: 'Income',
    type: 'Income',
  },
  {
    id: '55869423a0f-3da1-471f-b213d96-145571e29d72',
    title: 'Expense',
    type: 'Expense',
  },
  {
    id: '658694a0f-3d1a1-4711f-b33d96-145571e29d72',
    title: 'Expense', type: 'Expense',
  },
  {
    id: '758694a0f-3da1-471f-1d96-1455731e29d72',
    title: 'Expense',
    type: 'Expense',
  },
  {
    id: '858694a0f-3da1-4713f-bd96-1451571e29d72',
    title: 'Income',
    title: 'Income',
  },
  {
    id: '95811694a0f-3d3a1-471f-bd96-145571e29d72',
    title: 'Expense',
    title: 'Expense',
  },
];

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    itemAlign: 'center',
  
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



export default class AccountDetailScreen extends React.Component {

    onAccountPress=()=>{
      this.props.navigation.navigate('CategoryScreen');
    }

    render() {
   
        return(
          <MainLayout title="AccountDetailScreen" navigation={this.props.navigation}>
            <SafeAreaView style={styles.container}>
            <List data={DATA} />
          </SafeAreaView>
        </MainLayout>
        );
    }
}