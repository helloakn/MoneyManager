/* start style */
import styled from 'styled-components/native';

const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    backgroundColor:#000000;
`
const MainHeader = styled.View`
    height: 10%;
    width: 100%;
    backgroundColor:#AE66D8;
`
        const MainHeaderTop = styled.View`
            height: 50%;
            width: 100%;
            backgroundColor:#AE66D8;
        `
        const MainHeaderBottom = styled.View`
            height: 50%;
            width: 100%;
            display:flex;
            flexDirection:row;
            alignItems: center;
           // justifyContent:center;
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
    height: 70%;
    width: 100%;
    backgroundColor:#F4E1FF;
    alignItems: center;
    flexDirection:column;
`


/* end style */

export {
    MainContainer,
        MainHeader,
            MainHeaderTop,MainHeaderBottom,
                HeaderTitleContainer,HeaderTitleCaption,HeaderIcon,
        MainBody
}