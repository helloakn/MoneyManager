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

export default class ButtonAddIncome extends React.Component {
    render() {

        return(
            <MainContainer>
                <IconFont>
                    <Svg width="100%" height="100%" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <G filter="url(#filter0_d_797:401)">
                            <Circle cx="29" cy="25" r="24.5" fill="#AE66D8" strokeWidth="2" stroke="white"/>
                            <Path d="M33.9619 34.8185H30.8369C30.3975 34.8185 30.0557 35.2091 30.0557 35.5997V37.1622C30.0557 37.6017 30.3975 37.9435 30.8369 37.9435H33.9619C34.3525 37.9435 34.7432 37.6017 34.7432 37.1622V35.5997C34.7432 35.2091 34.3525 34.8185 33.9619 34.8185ZM19.8994 22.3185H22.2432V37.1622C22.2432 37.6017 22.585 37.9435 23.0244 37.9435H24.5869C24.9775 37.9435 25.3682 37.6017 25.3682 37.1622V22.3185H27.7119C28.3955 22.3185 28.7373 21.4884 28.249 21.0001L24.3428 16.3126C24.1963 16.1661 24.001 16.1173 23.8057 16.1173C23.5615 16.1173 23.3662 16.1661 23.2197 16.3126L19.3135 21.0001C18.8252 21.4884 19.167 22.3185 19.8994 22.3185ZM40.2119 22.3185H30.8369C30.3975 22.3185 30.0557 22.7091 30.0557 23.0997V24.6622C30.0557 25.1017 30.3975 25.4435 30.8369 25.4435H40.2119C40.6025 25.4435 40.9932 25.1017 40.9932 24.6622V23.0997C40.9932 22.7091 40.6025 22.3185 40.2119 22.3185ZM37.0869 28.5685H30.8369C30.3975 28.5685 30.0557 28.9591 30.0557 29.3497V30.9122C30.0557 31.3517 30.3975 31.6935 30.8369 31.6935H37.0869C37.4775 31.6935 37.8682 31.3517 37.8682 30.9122V29.3497C37.8682 28.9591 37.4775 28.5685 37.0869 28.5685ZM43.3369 16.0685H30.8369C30.3975 16.0685 30.0557 16.4591 30.0557 16.8497V18.4122C30.0557 18.8517 30.3975 19.1935 30.8369 19.1935H43.3369C43.7275 19.1935 44.1182 18.8517 44.1182 18.4122V16.8497C44.1182 16.4591 43.7275 16.0685 43.3369 16.0685Z" fill="#2C962C"/>
                        </G>
                    </Svg>
                </IconFont>
                <IconText>
                    <Caption>Add Income</Caption>
                </IconText>
            </MainContainer>
        );
    }
}