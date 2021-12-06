
import React from 'react';

import {Dimensions,
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
} from 'react-native';

import styled from 'styled-components/native';

import MainLayout from '../../../Layouts/MainLayout';

import NormalFooter from '../../../Components/HeaderFooter/NormalFooter';

import List from "../../../Components/List";
let screenWidth = Dimensions.get("window").width;


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


const Header = styled.View`
  height: 8%;
  width: 100%;
  display:flex;
  flexDirection:row;
  alignItems: flex-end;
  justifyContent:flex-start;
  backgroundColor:#AE66D8;
`
const Caption = styled.Text`
  fontFamily: Ropa Sans;
`


const HeaderLine = styled.View`
  height: 1%;
  width: 100%;
  display:flex;
  flexDirection:row;
  alignItems: flex-end;
  justifyContent:center;
  backgroundColor:#AE66D8;
`
const HeaderTab = styled.View`
  height: 80%;
  width: 20%;
  left:10px;
  display:flex;
  flexDirection:row;
  alignItems: center;
  justifyContent:center;  
  backgroundColor:${props=>props.isActiveTab=="yes"?"#EBCFFB":"#AE66D8"};
  ${props=>props.isActiveTab=="yes"?{borderRadius:"10px"}:{borderBottomColor:"#AE66D8",borderBottomWidth:"1px"}}
`
const HeaderTabCaption = styled.Text`
  color:#563469;
  fontWeight:bold;
  fontFamily: Ropa Sans;
  fontWeight:bold;
  color:${props=>props.isActiveTab=="yes"?"#563469":"#ffffff"};
`
const DailyHeader = styled.View`
  height: 10%;
  width: 100%;
`

    const DateContainer = styled.TouchableOpacity`
      height: 100%;
      width: ${(screenWidth/7)}px;
    `
      const DayNumber = styled.View`
        height: 50%;
        width: 100%;
        backgroundColor:#AE66D8;

        alignItems: center;
        justifyContent:center; 
      `
      const DayName = styled.View`
        height: 50%;
        width: 100%;
        backgroundColor:#EBCFFB;

        alignItems: center;
        justifyContent:center; 
      `
        const DayText = styled.Text`
          color:black;
        `


const DailyContainer = styled.View`
  height: 80%;
  width: 100%;
  display:flex;
  flexDirection:column;
  alignItems: center;
  justifyContent:flex-start;
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
width: 20%;
display:flex;
flexDirection:row;
alignItems: flex-start;
justifyContent:space-around;
`
const MainHeaderRight = styled.View`
height: 100%;
width: 80%;
display:flex;
flexDirection:row;
alignItems: flex-end;
justifyContent:flex-end;
bottom:5px;
padding:5px;

`



const Body = styled.View`
height: 70%;
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


import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

let activeTab = "Daily";
class MainHeader extends React.Component{
    render(){
        return(
            <MainHeaderContainer >
                <MainHeaderLeft>
                  <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={()=>{this.props.navigation.goBack();}}>
                    <FontAwesome style={{color:'#EBCFFB',fontSize:30}} icon={SolidIcons.angleLeft} />

                  </TouchableOpacity>
                </MainHeaderLeft>
    
                <MainHeaderRight>
                    <Caption style={{fontSize:20,color:'#ffffff',padding:3}}>January</Caption>
                    <TouchableOpacity onPress={this.props.onPressYearUP}>
                        <FontAwesome style={{color:'#ffffff',fontSize:20,padding:3}} icon={SolidIcons.chevronCircleLeft} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressYearUP}>
                        <FontAwesome style={{color:'#ffffff',fontSize:20,padding:3,paddingRight:10}} icon={SolidIcons.chevronCircleRight} />
                    </TouchableOpacity>

                    <View style={{ width:1,height:'50%',backgroundColor:"#ffffff",paddingBottom:3,bottom:3}}></View>
                    
                    <Caption style={{fontSize:20,color:'#ffffff',paddingBottom:3,paddingRight:5,paddingLeft:10}}>2021</Caption>
                    <TouchableOpacity onPress={this.props.onPressYearUP}>
                        <FontAwesome style={{color:'#ffffff',fontSize:20,padding:3}} icon={SolidIcons.chevronCircleLeft} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressYearUP}>
                        <FontAwesome style={{color:'#ffffff',fontSize:20,padding:3}} icon={SolidIcons.chevronCircleRight} />
                    </TouchableOpacity>
                </MainHeaderRight>
            </MainHeaderContainer>
        );
    }
    
}

export default class TransactionListScreen extends React.Component {
    constructor(props){
      super(props);
      this.state={
        activeTab:"Daily",
        dateData:[
          {key:1,name:"Sun",number:"1"},
          {key:2,name:"Mon",number:"2"},
          {key:3,name:"Tue",number:"3"},
          {key:4,name:"Wed",number:"4"},
          {key:5,name:"Thu",number:"5"},
          {key:6,name:"Fri",number:"6"},
          {key:7,name:"Sat",number:"7"},
          {key:8,name:"Sun",number:"8"},
          {key:9,name:"Mon",number:"9"},
          {key:10,name:"Tue",number:"1"},
          {key:11,name:"Wed",number:"1"},
          {key:12,name:"Thu",number:"1"},
          {key:13,name:"Fri",number:"1"},
          {key:14,name:"Sat",number:"7"},
          {key:15,name:"Sun",number:"1"},
          {key:16,name:"Mon",number:"1"},
          {key:17,name:"Tue",number:"1"},
          {key:18,name:"Wed",number:"1"},
          {key:19,name:"Thu",number:"1"},
          {key:20,name:"Fri",number:"1"},
          {key:21,name:"Sat",number:"7"},
          {key:22,name:"Sun",number:"1"},
          {key:23,name:"Mon",number:"1"},
          {key:24,name:"Tue",number:"1"},
          {key:25,name:"Wed",number:"1"},
          {key:26,name:"Thu",number:"1"},
          {key:27,name:"Fri",number:"1"},
          {key:28,name:"Sat",number:"7"},
          {key:29,name:"Sat",number:"7"}
          
        ]
      };
    }

    onAccountPress=()=>{
      this.props.navigation.navigate('CategoryScreen');
    }

    
    onPressYearlyUP=()=>{
     // console.log("Yearly");
      //  alert('ok');
      this.setState({
        activeTab:"Yearly"
      });
     // console.log("Yearly");
    }
    onPressMonthlyUP=()=>{
      //console.log("Monthly");
      // alert('ok');
      this.setState({
        activeTab:"Monthly"
      });
      //console.log("Monthly");
    }
    onPressDailyUP=()=>{
      //console.log("Daily");
      //  alert('ok');
      this.setState({
        activeTab:"Daily"
      });
      //console.log("Daily");
    }

    renderDay = ({ item }) => (
      <DateContainer key={item.key}>
        <DayName><DayText>{item.name}</DayText></DayName>
        <DayNumber><DayText>{item.number}</DayText></DayNumber>
      </DateContainer>
    );

    render() {
      
      
        return(
          <MainLayout title="Transaction" navigation={this.props.navigation} header={<MainHeader navigation={this.props.navigation} onPressYearUP={this.onPressYearUP}/>}  >
           
            <Header>
                <HeaderTab isActiveTab={this.state.activeTab=="Daily"?"yes":"no"}>
                  <TouchableOpacity onPress={this.onPressDailyUP}>
                    <HeaderTabCaption isActiveTab={this.state.activeTab=="Daily"?"yes":"no"} >Daily</HeaderTabCaption>
                  </TouchableOpacity>
                </HeaderTab>
                <HeaderTab isActiveTab={this.state.activeTab=="Monthly"?"yes":"no"}>
                  <TouchableOpacity onPress={this.onPressMonthlyUP}>
                    <HeaderTabCaption isActiveTab={this.state.activeTab=="Monthly"?"yes":"no"} >Monthly</HeaderTabCaption>
                  </TouchableOpacity>
                </HeaderTab>
                <HeaderTab isActiveTab={this.state.activeTab=="Yearly"?"yes":"no"}>
                  <TouchableOpacity onPress={this.onPressYearlyUP}>
                    <HeaderTabCaption isActiveTab={this.state.activeTab=="Yearly"?"yes":"no"}>Yearly</HeaderTabCaption>
                  </TouchableOpacity>
                </HeaderTab>
            </Header>

            <HeaderLine />

            

            <DailyContainer>
            <DailyHeader>
              
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={this.state.dateData}
                  renderItem={this.renderDay}
                  keyExtractor={item => item.key}
                  horizontal
                />
              </SafeAreaView>


            </DailyHeader>
              <Body>
                <SafeAreaView style={styles.container}>
                  <List data={DATA} />
                </SafeAreaView> 
              </Body>
              <NormalFooter/>
            </DailyContainer>

        </MainLayout>
        );
    }
}