
import React from 'react';

import {
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
} from 'react-native';

import MainLayout from '../../../Layouts/MainLayout';


import AccountContainer from "../../../Components/Listing/AccountContainer";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145322571e29d72',
    title: 'Third Item',
  },
  {
    id: '586942a0f-3da1-471f-bd96-145571e229d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-b2d96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-b33d96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455731e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-4713f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3d3a1-471f-bd96-145571e29d72',
    title: 'Third Item',
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



export default class AccountListScreen extends React.Component {

  
    onAccountPress=()=>{
      this.props.navigation.navigate('AccountDetailScreen');
    }

    render() {
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={this.onAccountPress} >
        <AccountContainer title={item.title} />
        </TouchableOpacity>
      );
        return(
          <MainLayout title="Account" navigation={this.props.navigation}>
            <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              contentContainerStyle = {{ alignItems: 'center'}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </MainLayout>
        );
    }
}