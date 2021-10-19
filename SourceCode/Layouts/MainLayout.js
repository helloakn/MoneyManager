import React from 'react';

import { View,TouchableOpacity, StyleSheet, Image,Text } from 'react-native';

import {
    MainContainer,
    MainHeader,
        MainHeaderTop,MainHeaderBottom,
            HeaderTitleContainer,HeaderTitleCaption,HeaderIcon,
    MainBody,
    MainFooter,
        MainFooterADMOBContainer,
        MainFooterNavigationContainer,NavigationBar
} from './MainLayoutCss';

import {Icon} from '../Components/Icons';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


export default class MainLayout extends React.Component {
    constructor(props){
        super(props);
    }
    onPressAccount=()=>{
        alert('onPressAccount');
    }
    onPressCategory=()=>{
        console.log(this.props);
        this.props.navigation.navigate('Setting');
    }
    onPressSettings=()=>{
        alert('onPressSetting');
    }

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
                <MainFooter>
                    <MainFooterADMOBContainer>
                    </MainFooterADMOBContainer>
                    
                </MainFooter>


            </MainContainer>
        );
    }
}

/*
<MainFooterNavigationContainer>
                        <NavigationBar>
                            <TouchableOpacity
                                onPress={this.onPressAccount}
                            >
                                <Icon title="Accounts" isActive="yes" iconName={SolidIcons.userFriends} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.onPressCategory}
                            >
                                 <Icon title="Category" isActive="no"  iconName={SolidIcons.layerGroup} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.onPressSettings}
                            >
                                <Icon title="Settings" isActive="no"  iconName={SolidIcons.cogs}  />
                            </TouchableOpacity>
                           
                            
                        </NavigationBar>
                    </MainFooterNavigationContainer>
                    */