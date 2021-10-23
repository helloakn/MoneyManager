import React from 'react';
import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const MainContainer = styled.View`
    width:100%;
    height: 100%;
`

const IconFont = styled.View`
    width:100%;
    height: 80%;
    borderRadius: 10px;
    justifyContent:center;
    alignItems: center;
`
const IconText = styled.View`
width:100%;
height: 20%;
top:-5%;
justifyContent:center;
alignItems: center;
`
const Caption = styled.Text`
    color:#62347C;
    fontFamily:"Ropa Sans";
    fontSize:12px;
`
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    Filter,
    FeFlood,
    FeColorMatrix,
    FeOffset,
    FeGaussianBlur,
    FeComposite,
    FeBlend
  } from 'react-native-svg';

export default class ButtonAddExpense extends React.Component {
    render() {

        return(
            <MainContainer>
                <IconFont>
                    <Svg width="100%" height="100%" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G filter="url(#filter0_d_797:415)">
                        <Circle cx="29" cy="25" r="24.5"  strokeWidth="2" fill="#AE66D8" stroke="white"/>
                        <Path d="M29.8916 17.1935H33.0166C33.4072 17.1935 33.7979 16.8517 33.7979 16.4122V14.8497C33.7979 14.4591 33.4072 14.0685 33.0166 14.0685H29.8916C29.4521 14.0685 29.1104 14.4591 29.1104 14.8497V16.4122C29.1104 16.8517 29.4521 17.1935 29.8916 17.1935ZM29.8916 23.4435H36.1416C36.5322 23.4435 36.9229 23.1017 36.9229 22.6622V21.0997C36.9229 20.7091 36.5322 20.3185 36.1416 20.3185H29.8916C29.4521 20.3185 29.1104 20.7091 29.1104 21.0997V22.6622C29.1104 23.1017 29.4521 23.4435 29.8916 23.4435ZM42.3916 32.8185H29.8916C29.4521 32.8185 29.1104 33.2091 29.1104 33.5997V35.1622C29.1104 35.6017 29.4521 35.9435 29.8916 35.9435H42.3916C42.7822 35.9435 43.1729 35.6017 43.1729 35.1622V33.5997C43.1729 33.2091 42.7822 32.8185 42.3916 32.8185ZM29.8916 29.6935H39.2666C39.6572 29.6935 40.0479 29.3517 40.0479 28.9122V27.3497C40.0479 26.9591 39.6572 26.5685 39.2666 26.5685H29.8916C29.4521 26.5685 29.1104 26.9591 29.1104 27.3497V28.9122C29.1104 29.3517 29.4521 29.6935 29.8916 29.6935ZM26.7666 29.6935H24.4229V14.8497C24.4229 14.4591 24.0322 14.0685 23.6416 14.0685H22.0791C21.6396 14.0685 21.2979 14.4591 21.2979 14.8497V29.6935H18.9541C18.2217 29.6935 17.8799 30.5724 18.3682 31.0607L22.2744 35.7482C22.4209 35.8947 22.6162 35.9435 22.8604 35.9435C23.0557 35.9435 23.251 35.8947 23.3975 35.7482L27.3037 31.0607C27.792 30.5724 27.4502 29.6935 26.7666 29.6935Z" fill="#FF0000"/>
                        </G>
                        <Defs>
                        
                        </Defs>
                    </Svg>

                </IconFont>
                <IconText>
                    <Caption>Add Expense</Caption>
                </IconText>
            </MainContainer>
        );
    }
}