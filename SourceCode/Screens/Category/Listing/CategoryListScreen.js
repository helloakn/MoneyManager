
import React from 'react';

import {Dimensions,
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
} from 'react-native';

import styled from 'styled-components/native';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

import MainLayout from '../../../Layouts/MainLayout';


import CategoryList from "../../../Components/Listing/CategoryList";
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
height: 100%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
// justifyContent:center;
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


class MainHeader extends React.Component{
  render(){
      return(
          <MainHeaderContainer >
              <MainHeaderLeft>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={()=>{this.props.navigation.goBack();}}>
                  <FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.chevronLeft} />
                 
                </TouchableOpacity>
              </MainHeaderLeft>
              <MainHeaderMid>
              <Caption style={{ fontSize:20,color:'#ffffff',padding:3}}>Category</Caption>
              </MainHeaderMid>
              <MainHeaderRight>
                
                  
                  
                  <TouchableOpacity style={{right:5}} onPress={this.props.onPressYearUP}>
                      <FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.plus} />
                  </TouchableOpacity>
              </MainHeaderRight>
          </MainHeaderContainer>
      );
  }
  
}

export default class AccountDetailScreen extends React.Component {

    onAccountPress=()=>{
      this.props.navigation.navigate('CategoryScreen');
    }

    onPressViewTransactions=()=>{
      this.props.navigation.navigate('TransactionListScreen');
    }

    render() {
      
      
        return(
          <MainLayout navigation={this.props.navigation}  header={<MainHeader navigation={this.props.navigation} onPressYearUP={this.onPressYearUP}/>}>
            
            
            <Body>
                <SafeAreaView style={styles.container}>
                <CategoryList data={DATA} />
              </SafeAreaView>
            </Body>
        </MainLayout>
        );
    }
}