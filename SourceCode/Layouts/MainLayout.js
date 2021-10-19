import React from 'react';

import { View, StyleSheet, Image,Text } from 'react-native';

import {
    MainContainer,
    MainHeader,
        MainHeaderTop,MainHeaderBottom,
            HeaderTitleContainer,HeaderTitleCaption,HeaderIcon,
    MainBody
} from './MainLayoutCss';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

export default class MainLayout extends React.Component {
    render() {

        return(
            <MainContainer>

                <MainHeader>
                   <MainHeaderTop>

                   </MainHeaderTop>
                   <MainHeaderBottom>
                       <HeaderTitleContainer>
                           <HeaderTitleCaption>{this.props.title}</HeaderTitleCaption>
                       </HeaderTitleContainer>
                       <HeaderIcon>
                            <FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.userPlus} />
                       </HeaderIcon>
                   </MainHeaderBottom>
                </MainHeader>

                <MainBody>
                    {
                        this.props.children
                    }
                </MainBody>

            </MainContainer>
        );
    }
}