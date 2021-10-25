
import React from 'react';

import {
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList
} from 'react-native';
import styled from 'styled-components/native';

import MainLayout from "../../Layouts/MainLayout";

import AccountContainer from "../../Components/Listing/AccountContainer";


import {
  Appodeal,
  AppodealAdType,
  AppodealBannerEvent,
  AppodealBanner
} from 'react-native-appodeal';

//const adTypes = AppodealAdType.INTERSTITIAL | AppodealAdType.REWARDED_VIDEO | AppodealAdType.BANNER;
const adTypes = AppodealAdType.BANNER;
const consent = true; // dev or production
Appodeal.initialize('6a85b68b9931c915bba057e65a6c4b4447426abcb83bbe21', adTypes, consent);

Appodeal.addEventListener(AppodealBannerEvent.FAILED_TO_LOAD, () =>
    console.log('failed to load banner')
);



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

const Body = styled.View`
height: 50%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:space-around;
`
const Footer = styled.View`
height: 15%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:space-around;
`

export default class HomeScreen extends React.Component {
    render() {
      const renderItem = ({ item }) => (
        <AccountContainer title={item.title} />
      );
        return(
          <MainLayout title="Home Screen" >
           
          <Body>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={DATA}
                contentContainerStyle = {{ alignItems: 'center'}}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          </Body>


          <Footer>
            <AppodealBanner
                style = {{
                    height: 50,
                    width: '100%',
                    alignContent: 'stretch',
                }}
                adSize = 'phone'
                usesSmartSizing // (iOS specific) on Android smart banners are enabled by default.
            />
            </Footer>

        </MainLayout>
        );
    }
}