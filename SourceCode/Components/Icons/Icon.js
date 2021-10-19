import React from 'react';
import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const MainContainer = styled.View`
    width:100px;
    height: 100%;
    borderRadius: 10px;
`

const IconFont = styled.View`
    width:100%;
    height: 60%;
    borderRadius: 10px;
    justifyContent:center;
    alignItems: center;
`
const IconText = styled.View`
width:100%;
height: 40%;
borderRadius: 10px;
justifyContent:center;
alignItems: center;
`
const Caption = styled.Text`
    color:${props=>props.color};
`


export default class Icon extends React.Component {
    render() {

        return(
            <MainContainer>
                <IconFont>
                    <FontAwesome style={{color:(this.props.isActive=="yes"?"white":"#563469"),fontSize:20}} icon={this.props.iconName} />
                </IconFont>
                <IconText>
                    <Caption color={this.props.isActive=="yes"?"white":"#563469"} >{this.props.title}</Caption>
                </IconText>
            </MainContainer>
        );
    }
}