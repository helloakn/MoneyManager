import React from 'react';

import {Dimensions,
    View,
    Text,
    StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity,NativeEventEmitter
  } from 'react-native';
  
  import styled from 'styled-components/native';
  
  import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


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

export default  class MainHeader extends React.Component{
    render(){
        return(
            <MainHeaderContainer >
                <MainHeaderLeft>
                    {this.props.ableBack?
                    <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={()=>{this.props.navigation.goBack();}}>
                    <FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.chevronLeft} />
                   
                  </TouchableOpacity>
                    : 
                    <></>
                    }
                  
                </MainHeaderLeft>
                <MainHeaderMid>
                <Caption style={{ fontSize:20,color:'#ffffff',padding:3}}>{this.props.ScreenTitle}</Caption>
                </MainHeaderMid>
                <MainHeaderRight>
                  
                    
                {this.props.customIcon?
                    this.props.customIcon
                    : 
                    <TouchableOpacity style={{right:5}} onPress={this.props.onPressYearUP}>
                        <FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.plus} />
                    </TouchableOpacity>
                    }
                    
                </MainHeaderRight>
            </MainHeaderContainer>
        );
    }
    
  }