/* start style */
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 

const mainHeight = (200*height)/896;
const mainWidth = (360*width)/414;
const MainContainer = styled.View`
    width:${mainWidth}px;
    height: ${mainHeight}px;
    backgroundColor:#F4E1FF;
    top:20px;
    
    borderRadius: 10px;
`
const Header = styled.View`
    width:100%;
    height: 23%;
    backgroundColor:#C680EE;

    borderTopRightRadius: 10px;
    borderTopLeftRadius: 10px;

    justifyContent:center;
    alignItems:center;
   
`
    const AccountName = styled.Text`
        fontFamily: Ropa Sans;
        fontSize:20px;
        color:#ffffff;
    `
const Body = styled.View`
    width:100%;
    height: 77%;
    backgroundColor:#F4E1FF;

    borderBottomRightRadius: 10px;
    borderBottomLeftRadius: 10px;

    display:flex;
    flexDirection:row;
   
`
const BodyLeft = styled.View`
    width:36.1%;
    height: 100%;
    backgroundColor:#CE8FF2;

    borderBottomLeftRadius: 10px;

    justifyContent:center;
    alignItems:center;
   
`
const BodyRight = styled.View`
    width:63.9%;
    height: 100%;
    backgroundColor:#F4E1FF;

    borderBottomRightRadius: 10px;
   
`
        const BodyRightTop = styled.View`
            width:100%%;
            height: 50%;
        
            justifyContent:center;
            alignItems:center;
        `
            const Available = styled.Text`
                    fontFamily: Ropa Sans;
                    fontSize:20px;
                    color:#62347C;
            `
            const AvailableText = styled.Text`
                    fontFamily: Ropa Sans;
                    fontSize:20px;
                    color:#000000;
            `
        const BodyRightBottom = styled.View`
            width:100%%;
            height: 50%;
            borderBottomRightRadius: 10px;
            justifyContent:center;
            alignItems:center;
        `
        const Caption = styled.Text`
        fontFamily: Ropa Sans;
        fontSize:16px;
        fontWeight:normal;
        color:#000000;
        `

/* end style */

export {
    MainContainer,
        Header,AccountName,
            Body,
            BodyLeft,BodyRight,
                BodyRightTop,Available,AvailableText,
                BodyRightBottom,Caption

}