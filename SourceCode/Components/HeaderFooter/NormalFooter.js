
import React from 'react';
import {
    View,
    Text,
    StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
  } from 'react-native';
  import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';  
import styled from 'styled-components/native';


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


const Footer = styled.View`
height: 10%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: flex-start;
justifyContent:space-around;
`

export default class NormalFooter extends React.Component{
    render(){
        return(
            <Footer>
              <AppodealBanner
                  style = {{
                      height: 50,
                      width: '100%',
                      top:10,
                      alignContent: 'stretch',
                  }}
                  adSize = 'phone'
                  usesSmartSizing // (iOS specific) on Android smart banners are enabled by default.
              />
            </Footer>
        );
    }
    
  }