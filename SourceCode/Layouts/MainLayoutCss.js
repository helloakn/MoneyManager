/* start style */
import styled from 'styled-components/native';

const MainContainer = styled.View`
    width: 100%;
    height: 100%;
`
const MainHeader = styled.View`
    height: 10%;
    width: 100%;
    backgroundColor:#AE66D8;
`
        const MainHeaderTop = styled.View`
            height: 40%;
            width: 100%;
            backgroundColor:#AE66D8;
        `
        const MainHeaderBottom = styled.View`
            height: 60%;
            width: 100%;
            display:flex;
            flexDirection:row;
            alignItems: center;
           justifyContent:space-around;
        `
        const HeaderTitleContainer = styled.View`
            height: 100%;
            width: 40%;
            display:flex;
            alignItems: center;
            justifyContent:center;
            

        `
            const HeaderTitleCaption= styled.Text`
                
                width: 100%;
                color:#ffffff;
                fontSize:20px;
                fontFamily:Ropa Sans Regular;
                
            `
        const HeaderIcon = styled.View`
            height: 100%;
            width: 40%;
            justifyContent:center;
            alignItems: flex-end;   
           
        `
const MainBody = styled.View`
    height: 90%;
    width: 100%;
    backgroundColor:#F4E1FF;
    alignItems: center;
    flexDirection:column;
`
const MainFooter = styled.View`
    height: 15%;
    width: 100%;
    backgroundColor:#F4E1FF;
`
    const MainFooterADMOBContainer = styled.View`
        height: 40%;
        width: 100%;
        backgroundColor:#F4E1FF;
    `
    const MainFooterNavigationContainer = styled.View`
        height: 60%;
        width: 100%;
        backgroundColor:#F4E1FF;
        display:flex;
        alignItems: center;

    `
    const NavigationBar = styled.View`
        height: 80%;
        width: 80%;
        backgroundColor:#AE66D8;
        borderRadius:10px;
        justifyContent:space-between;
        display:flex;
        flexDirection:row;
        
    `

/* end style */

export {
    MainContainer,
        MainHeader,
            MainHeaderTop,MainHeaderBottom,
                HeaderTitleContainer,HeaderTitleCaption,HeaderIcon,
        MainBody,
        MainFooter,
            MainFooterADMOBContainer,
            MainFooterNavigationContainer,NavigationBar
}