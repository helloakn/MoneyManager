
import React from 'react';
import {
    View,
    Text,
    StyleSheet,StatusBar,SafeAreaView,FlatList,TouchableOpacity
  } from 'react-native';
  import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';  
import styled from 'styled-components/native';


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



export default class NormalHeader extends React.Component{
    render(){
        return(
            <MainHeaderContainer >
                <MainHeaderLeft>
                    {
                        (this.props.hideBack!="yes"?
                            <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={()=>{this.props.navigation.goBack();}}>
                                <FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.chevronLeft} />
                            </TouchableOpacity>
                        :
                            <></> 
                        )
                    }
                  
                </MainHeaderLeft>
                <MainHeaderMid>
                    <Caption style={{ fontSize:20,color:'#ffffff',padding:3}}>{this.props.title}</Caption>
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