
import React from 'react';

import {Dimensions,
  View,
  Text,
  StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
} from 'react-native';

import styled from 'styled-components/native';

import MainLayout from '../../../Layouts/MainLayout';


import List from "../../../Components/List";
let screenWidth = Dimensions.get("window").width-40;


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
height: 20%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
// justifyContent:center;
justifyContent:space-around;
`
const HeaderLeft = styled.View`
height: 100%;
width: 60%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:center;
`
const HeaderRight = styled.View`
height: 70%;
width: 40%;
display:flex;
flexDirection:column;
alignItems: center;
justifyContent:space-between;;
`
const MessageContainer = styled.View`
top:5px;
height:20%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:center;
`
  const MessageContainerLeft = styled.View`
  height:100%;
  width: 20%;
  display:flex;
  flexDirection:row;
  alignItems: center;
  justifyContent:center;
  `
  const MessageCircle = styled.View`
    height:10px;
    width: 10px;
    borderRadius:50px;
    backgroundColor:${props=>props.color};
  `
  const MessageContainerRight = styled.View`
  height:100%;
  width: 80%;
  display:flex;
  flexDirection:column;
  alignItems: flex-start;
  justifyContent:center;
  `
const ButtonContainer = styled.View`
height: 10%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
justifyContent:space-around;
`
const MainBody = styled.View`
height: 66%;
width: 100%;
display:flex;
flexDirection:row;
alignItems: center;
// justifyContent:center;
justifyContent:space-around;
`


import ButtonAddIncome from '../../../Components/Buttons/ButtonAddIncome';
import ButtonAddExpense from '../../../Components/Buttons/ButtonAddExpense';
import ButtonViewTransaction from '../../../Components/Buttons/ButtonViewTransaction';

import PieChart from "../../../Components/Charts/PieChart";

import NormalFooter from '../../../Components/HeaderFooter/NormalFooter';

export default class AccountDetailScreen extends React.Component {

    onAccountPress=()=>{
      this.props.navigation.navigate('CategoryScreen');
    }

    onPressViewTransactions=()=>{
      this.props.navigation.navigate('TransactionListScreen');
    }

    onPressAddExpense=()=>{
      this.props.navigation.navigate('AddExpenseScreen');
    }

    render() {
      
      
        return(
          <MainLayout title="Account Detail"  navigation={this.props.navigation}>
            <Header>
              <HeaderLeft>
                <PieChart />
              </HeaderLeft>
              <HeaderRight>

                <MessageContainer>
                  <MessageContainerLeft>
                    <MessageCircle color="#76DF76"/>
                  </MessageContainerLeft>
                  <MessageContainerRight>
                    <Text>Income</Text>
                    <Text>300,000,000</Text>
                  </MessageContainerRight>
                </MessageContainer>

                <MessageContainer>
                  <MessageContainerLeft>
                    <MessageCircle color="#EF5C5C" />
                  </MessageContainerLeft>
                  <MessageContainerRight>
                    <Text>Expend</Text>
                    <Text>200,000,000</Text>
                  </MessageContainerRight>
                </MessageContainer>


                <MessageContainer>
                  <MessageContainerLeft>
                    <MessageCircle color="#AE66D8" />
                  </MessageContainerLeft>
                  <MessageContainerRight>
                    <Text>Balance</Text>
                    <Text>100,000,000</Text>
                  </MessageContainerRight>
                </MessageContainer>

              </HeaderRight>
              
            </Header>
            
            <ButtonContainer>
              <TouchableOpacity style={{alignItems: 'center',width:'30%',height:'100%'}} onPress={this.onPressViewTransactions}>
                <ButtonAddIncome />
              </TouchableOpacity>

              <TouchableOpacity style={{alignItems: 'center',width:'30%',height:'100%'}} onPress={this.onPressAddExpense}>
                <ButtonAddExpense />
              </TouchableOpacity>

              <TouchableOpacity style={{alignItems: 'center',width:'30%',height:'100%'}} onPress={this.onPressViewTransactions}>
                <ButtonViewTransaction />
              </TouchableOpacity>
            </ButtonContainer>
            <NormalFooter />
            <MainBody>
                <SafeAreaView style={styles.container}>
                <List data={DATA} />
              </SafeAreaView>
            </MainBody>
            
        </MainLayout>
        );
    }
}