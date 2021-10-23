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

export default class ButtonViewTransaction extends React.Component {
    render() {

        return(
            <MainContainer>
                <IconFont>
                    <Svg width="100%" height="100%"  viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G filter="url(#filter0_d_797:243)">
                            <Circle cx="29" cy="25" r="25" fill="#796CC7"/>
                            <Circle cx="29" cy="25" r="24.5" stroke="#ffffff"  strokeWidth="2" fill="none"/>
                        </G>
                        <Circle cx="21.5" cy="20.5" r="8" stroke="#6BF5F5"/>
                        <Path  d="M20.5 21H27.5" stroke="#6BF5F5" strokeWidth="2"/>
                        <Path d="M21.4999 21.5L18.1137 15.4635" stroke="#6BF5F5" strokeWidth="2"/>
                        <Line x1="27" y1="12.5" x2="39" y2="12.5" stroke="#6BF5F5"/>
                        <Line x1="32" y1="17.5" x2="36" y2="17.5" stroke="#6BF5F5"/>
                        <Line x1="31" y1="22.5" x2="36" y2="22.5" stroke="#6BF5F5"/>
                        <Line x1="28" y1="27.5" x2="36" y2="27.5" stroke="#6BF5F5"/>
                        <Line x1="24" y1="32.5" x2="36" y2="32.5" stroke="#6BF5F5"/>
                        <Line x1="21" y1="36.5" x2="39" y2="36.5" stroke="#6BF5F5"/>
                        <Line x1="39.5" y1="12" x2="39.5" y2="37" stroke="#6BF5F5"/>
                        <Line x1="21.5" y1="30" x2="21.5" y2="37" stroke="#6BF5F5"/>
                    </Svg>


                </IconFont>
                <IconText>
                    <Caption>View Transactions</Caption>
                </IconText>
            </MainContainer>
        );
    }
}