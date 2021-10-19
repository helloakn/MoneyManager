import React from 'react';

import { View, StyleSheet, Image,Text } from 'react-native';


const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#fff',
        shadowOffset: {width: -1, height: 5},
        shadowOpacity: 1,
        shadowRadius: 13,
      }
});

import {
    MainContainer,
        Header,AccountName,
            Body,
            BodyLeft,BodyRight,
                BodyRightTop,Available,AvailableText,
                BodyRightBottom,Caption
} from './AccountContainerCss';


import Svg, {
    Path,
    Rect
  } from 'react-native-svg';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';



export default class AccountContainer extends React.Component {
    render() {

        return(
            <>
            <MainContainer style={styles.shadowProp}>
                <Header>
                   <AccountName>Main Account</AccountName>
                </Header>
               <Body>
                    <BodyLeft>
                        <Svg width="100%" height="100%" viewBox="0 0 133 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M67 66.5C80.6719 66.5 92 55.3672 92 41.5C92 27.8281 80.6719 16.5 67 16.5C53.1328 16.5 42 27.8281 42 41.5C42 55.3672 53.1328 66.5 67 66.5ZM84.3828 72.75H81.0625C76.7656 74.8984 72.0781 75.875 67 75.875C61.9219 75.875 57.0391 74.8984 52.7422 72.75H49.4219C34.9688 72.75 23.25 84.6641 23.25 99.1172V107.125C23.25 112.398 27.3516 116.5 32.625 116.5H101.375C106.453 116.5 110.75 112.398 110.75 107.125V99.1172C110.75 84.6641 98.8359 72.75 84.3828 72.75Z" fill="#F4E1FF"/>
                            <Path d="M81.0625 72.75V69.75H80.3543L79.7209 70.0667L81.0625 72.75ZM52.7422 72.75L54.0838 70.0667L53.4504 69.75H52.7422V72.75ZM67 69.5C82.3135 69.5 95 57.0393 95 41.5H89C89 53.6951 79.0303 63.5 67 63.5V69.5ZM95 41.5C95 26.1713 82.3287 13.5 67 13.5V19.5C79.015 19.5 89 29.485 89 41.5H95ZM67 13.5C51.4607 13.5 39 26.1865 39 41.5H45C45 29.4697 54.8049 19.5 67 19.5V13.5ZM39 41.5C39 57.024 51.476 69.5 67 69.5V63.5C54.7897 63.5 45 53.7103 45 41.5H39ZM84.3828 69.75H81.0625V75.75H84.3828V69.75ZM79.7209 70.0667C75.899 71.9777 71.6824 72.875 67 72.875V78.875C72.4738 78.875 77.6323 77.8192 82.4041 75.4333L79.7209 70.0667ZM67 72.875C62.2987 72.875 57.8913 71.9704 54.0838 70.0667L51.4005 75.4333C56.1868 77.8264 61.5451 78.875 67 78.875V72.875ZM52.7422 69.75H49.4219V75.75H52.7422V69.75ZM49.4219 69.75C33.283 69.75 20.25 83.0363 20.25 99.1172H26.25C26.25 86.2918 36.6545 75.75 49.4219 75.75V69.75ZM20.25 99.1172V107.125H26.25V99.1172H20.25ZM20.25 107.125C20.25 114.055 25.6947 119.5 32.625 119.5V113.5C29.0084 113.5 26.25 110.742 26.25 107.125H20.25ZM32.625 119.5H101.375V113.5H32.625V119.5ZM101.375 119.5C108.069 119.5 113.75 114.096 113.75 107.125H107.75C107.75 110.701 104.837 113.5 101.375 113.5V119.5ZM113.75 107.125V99.1172H107.75V107.125H113.75ZM113.75 99.1172C113.75 83.0072 100.493 69.75 84.3828 69.75V75.75C97.1791 75.75 107.75 86.3209 107.75 99.1172H113.75Z" fill="white"/>
                        </Svg>
                    </BodyLeft>
                    <BodyRight>
                        <BodyRightTop>
                            <Available>Available</Available>
                            <AvailableText>$30,000,000</AvailableText>
                        </BodyRightTop>

                        <BodyRightBottom>
                            <Caption>Income : 120000</Caption>
                            <Caption>Expense : 100000</Caption>
                        </BodyRightBottom>

                    </BodyRight>
               </Body>

            </MainContainer>
            <View style={{width:'100%',height:30}}></View>
            </>
        );
    }
}