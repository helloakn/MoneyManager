
import React from 'react';

import {Dimensions,
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity,NativeEventEmitter
} from 'react-native';

import styled from 'styled-components/native';

import AddAccountController from './AddAccountController';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

import MainLayout from '../../../Layouts/MainLayout';


import CategoryList from "../../../Components/Listing/CategoryList";
let screenWidth = Dimensions.get("window").width-40;



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
flexDirection:column;
alignItems: center;
justifyContent:flex-start;
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

const Label = styled.Text`
  fontFamily: Ropa Sans;
  color:#563469;
  fontSize:20px;
  width:90%;
  marginTop:20px;
  marginBottom:5px;
  `

const Row = styled.View`
  width:90%;
  height:54px;
  backgroundColor:#C294DD;
  borderRadius:12px;
  display:flex;
  flexDirection:row;
  marginTop:5px;
  marginBottom:5px;
`
const RowLeft = styled.View`
  width:20%;
  height:100%;
  borderRadius:12px;
  display:flex;
  justifyContent:center;
  alignItems:center;
`
const RowRight = styled.View`
  width:80%;
  height:100%;
  borderRadius:12px;
  justifyContent:center;
  alignItems:center;

`
const TextBox = styled.TextInput`
  width:99%;
  height:95%;
  backgroundColor:#F2EBF6;
  borderRadius:12px;
  color:#563469;
  border:1px solid #AE66D8;
`
const MultiLineTextBox = styled.TextInput`
  width:90%;
  height:100px;
  backgroundColor:#F2EBF6;
  borderRadius:5px;
  color:#563469;
  border:1px solid #AE66D8;
  textAlignVertical:top;
`

import MainHeader from '../../../Components/HeaderFooter/MainHeader';

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


export default class AddAccountScreen extends AddAccountController{

    onAccountPress=()=>{
      this.props.navigation.navigate('CategoryScreen');
    }

    

    render() {
      
      
        return(
          <MainLayout 
            navigation={this.props.navigation}  
            header={
                  <MainHeader 
                    customIcon={
                      <TouchableOpacity 
                        style={{right:5}} 
                        onPress={this.OnCreate}>
                        <FontAwesome 
                          style={{color:'#ffffff',fontSize:30}} 
                          icon={SolidIcons.checkCircle} 
                        />
                      </TouchableOpacity>
                    }  
                    ableBack
                    ScreenTitle="Create New Account" 
                    navigation={this.props.navigation} 
                    onPressYearUP={this.onPressYearUP}
                  />
              }
          >
            
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

            <Label>Account Name :  </Label>
              <Row>
                <RowLeft>
                  <FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.user} />
                </RowLeft>
                <RowRight>
                  <TextBox />
                </RowRight>
              </Row>


              <Label>Amount : ( initial amount of money ) </Label>
              <Row>
                <RowLeft>
                  <FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.handHoldingUsd} />
                </RowLeft>
                <RowRight>
                  <TextBox />
                </RowRight>
              </Row>

              


              <Label>Description : </Label>
              <MultiLineTextBox 
              numberOfLines={4}
              multiline={true}
               />

            </Body>

            
        </MainLayout>
        );
    }
}