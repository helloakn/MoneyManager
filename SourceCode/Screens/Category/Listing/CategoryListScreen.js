
import React from 'react';

import {Dimensions,
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity,NativeEventEmitter
} from 'react-native';

import styled from 'styled-components/native';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

import MainLayout from '../../../Layouts/MainLayout';


import CategoryList from "../../../Components/Listing/CategoryList";

import MainHeader from '../../../Components/HeaderFooter/MainHeader';

let screenWidth = Dimensions.get("window").width-40;


const DATA = [
  {id:1,name:"Gas",icon:SolidIcons.gasPump},
  {id:2,name:"Drinking",icon:SolidIcons.glassMartiniAlt},
  {id:3,name:"Phone Bill",icon:SolidIcons.mobileAlt},
  {id:4,name:"Wifi Bill",icon:SolidIcons.wifi},
  {id:5,name:"Shopping",icon:SolidIcons.shoppingCart},
  {id:6,name:"Transporation",icon:SolidIcons.shuttleVan},
  {id:7,name:"Transfer",icon:SolidIcons.handHoldingUsd},
  {id:8,name:"Gas",icon:SolidIcons.chevronCircleRight},
  {id:9,name:"Gas",icon:SolidIcons.chevronCircleRight},
  {id:10,name:"Gas",icon:SolidIcons.chevronCircleRight},
  {id:11,name:"Gas",icon:SolidIcons.chevronCircleRight},
  {id:12,name:"Gas",icon:SolidIcons.chevronCircleRight},
  {id:13,name:"Gas",icon:SolidIcons.chevronCircleRight},
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
height: 90%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:space-around;
`
const Footer = styled.View`
height: 10%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:space-around;
`



const MainHeaderContainer = styled.View`
height: 100%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
`

const MainHeaderLeft = styled.View`
height: 100%;
width: 15%;
display:flex;
flexDirection:row;
alignItems: flex-start;
justifyContent:space-around;
`
const MainHeaderMid = styled.View`
height: 100%;
width: 70%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:space-around;
`
const MainHeaderRight = styled.View`
height: 100%;
width: 15%;
display:flex;
flexDirection:row;
alignItems: flex-start;
justifyContent:space-around;
`
const Caption = styled.Text`
  fontFamily: Ropa Sans;
`


import {
  Appodeal,
  AppodealAdType,
  AppodealBannerEvent
} from 'react-native-appodeal';

//const adTypes = AppodealAdType.INTERSTITIAL | AppodealAdType.REWARDED_VIDEO | AppodealAdType.BANNER;
const adTypes = AppodealAdType.BANNER;
const consent = true; // dev or production
Appodeal.initialize('6a85b68b9931c915bba057e65a6c4b4447426abcb83bbe21', adTypes, consent);

Appodeal.addEventListener(AppodealBannerEvent.FAILED_TO_LOAD, () =>
    console.log('failed to load banner')
);


import {
  AppodealBanner
} from 'react-native-appodeal';


export default class AccountDetailScreen extends React.Component {

    onAccountPress=()=>{
      this.props.navigation.navigate('CategoryScreen');
    }

    onPressViewTransactions=()=>{
      this.props.navigation.navigate('TransactionListScreen');
    }

    render() {
      
      
        return(
          <MainLayout navigation={this.props.navigation}  header={<MainHeader ScreenTitle="Category" ableBack navigation={this.props.navigation} onPressYearUP={this.onPressYearUP}/>}>
            
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
            <Body>
                <SafeAreaView style={styles.container}>
                <CategoryList data={DATA} />
              </SafeAreaView>
            </Body>

            
        </MainLayout>
        );
    }
}