import React from 'react';
import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


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

export default class PieChart extends React.Component {
    render() {

        return(
                <Svg width="90%" height="90%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="80" cy="80" r="80" fill="#76DF76"/>
                    <Path d="M160 80C160 96.764 154.734 113.104 144.945 126.714C135.156 140.323 121.339 150.513 105.446 155.845C89.5528 161.177 72.386 161.382 56.37 156.431C40.354 151.479 26.2983 141.621 16.1877 128.249C6.07706 114.877 0.422581 98.6672 0.0227566 81.908C-0.377068 65.1488 4.49797 48.6875 13.9594 34.8487C23.4208 21.0099 36.9905 10.493 52.7522 4.78328C68.5138 -0.926494 85.6709 -1.54061 101.8 3.02764L80 80H160Z" fill="#E02339"/>
                    <Circle cx="79" cy="80" r="40" fill="#0F7DBC"/>
                    <Path d="M64.877 76.0098C64.877 76.8457 64.7363 77.5762 64.4551 78.2012C64.1738 78.8223 63.7754 79.2969 63.2598 79.625C62.7441 79.9531 62.1426 80.1172 61.4551 80.1172C60.7832 80.1172 60.1875 79.9531 59.668 79.625C59.1484 79.293 58.7441 78.8223 58.4551 78.2129C58.1699 77.5996 58.0234 76.8906 58.0156 76.0859V75.4707C58.0156 74.6504 58.1582 73.9258 58.4434 73.2969C58.7285 72.668 59.1309 72.1875 59.6504 71.8555C60.1738 71.5195 60.7715 71.3516 61.4434 71.3516C62.127 71.3516 62.7285 71.5176 63.248 71.8496C63.7715 72.1777 64.1738 72.6562 64.4551 73.2852C64.7363 73.9102 64.877 74.6387 64.877 75.4707V76.0098ZM63.7578 75.459C63.7578 74.4473 63.5547 73.6719 63.1484 73.1328C62.7422 72.5898 62.1738 72.3184 61.4434 72.3184C60.7324 72.3184 60.1719 72.5898 59.7617 73.1328C59.3555 73.6719 59.1465 74.4219 59.1348 75.3828V76.0098C59.1348 76.9902 59.3398 77.7617 59.75 78.3242C60.1641 78.8828 60.7324 79.1621 61.4551 79.1621C62.1816 79.1621 62.7441 78.8984 63.1426 78.3711C63.541 77.8398 63.7461 77.0801 63.7578 76.0918V75.459ZM68.9375 79.2324C69.3242 79.2324 69.6621 79.1152 69.9512 78.8809C70.2402 78.6465 70.4004 78.3535 70.4316 78.002H71.457C71.4375 78.3652 71.3125 78.7109 71.082 79.0391C70.8516 79.3672 70.543 79.6289 70.1562 79.8242C69.7734 80.0195 69.3672 80.1172 68.9375 80.1172C68.0742 80.1172 67.3867 79.8301 66.875 79.2559C66.3672 78.6777 66.1133 77.8887 66.1133 76.8887V76.707C66.1133 76.0898 66.2266 75.541 66.4531 75.0605C66.6797 74.5801 67.0039 74.207 67.4258 73.9414C67.8516 73.6758 68.3535 73.543 68.9316 73.543C69.6426 73.543 70.2324 73.7559 70.7012 74.1816C71.1738 74.6074 71.4258 75.1602 71.457 75.8398H70.4316C70.4004 75.4297 70.2441 75.0938 69.9629 74.832C69.6855 74.5664 69.3418 74.4336 68.9316 74.4336C68.3809 74.4336 67.9531 74.6328 67.6484 75.0312C67.3477 75.4258 67.1973 75.998 67.1973 76.748V76.9531C67.1973 77.6836 67.3477 78.2461 67.6484 78.6406C67.9492 79.0352 68.3789 79.2324 68.9375 79.2324ZM74.1465 72.125V73.6602H75.3301V74.498H74.1465V78.4297C74.1465 78.6836 74.1992 78.875 74.3047 79.0039C74.4102 79.1289 74.5898 79.1914 74.8438 79.1914C74.9688 79.1914 75.1406 79.168 75.3594 79.1211V80C75.0742 80.0781 74.7969 80.1172 74.5273 80.1172C74.043 80.1172 73.6777 79.9707 73.4316 79.6777C73.1855 79.3848 73.0625 78.9688 73.0625 78.4297V74.498H71.9082V73.6602H73.0625V72.125H74.1465ZM76.1973 76.7715C76.1973 76.1504 76.3184 75.5918 76.5605 75.0957C76.8066 74.5996 77.1465 74.2168 77.5801 73.9473C78.0176 73.6777 78.5156 73.543 79.0742 73.543C79.9375 73.543 80.6348 73.8418 81.166 74.4395C81.7012 75.0371 81.9688 75.832 81.9688 76.8242V76.9004C81.9688 77.5176 81.8496 78.0723 81.6113 78.5645C81.377 79.0527 81.0391 79.4336 80.5977 79.707C80.1602 79.9805 79.6562 80.1172 79.0859 80.1172C78.2266 80.1172 77.5293 79.8184 76.9941 79.2207C76.4629 78.623 76.1973 77.832 76.1973 76.8477V76.7715ZM77.2871 76.9004C77.2871 77.6035 77.4492 78.168 77.7734 78.5938C78.1016 79.0195 78.5391 79.2324 79.0859 79.2324C79.6367 79.2324 80.0742 79.0176 80.3984 78.5879C80.7227 78.1543 80.8848 77.5488 80.8848 76.7715C80.8848 76.0762 80.7188 75.5137 80.3867 75.084C80.0586 74.6504 79.6211 74.4336 79.0742 74.4336C78.5391 74.4336 78.1074 74.6465 77.7793 75.0723C77.4512 75.498 77.2871 76.1074 77.2871 76.9004ZM88.6953 76.9004C88.6953 77.8691 88.4727 78.6484 88.0273 79.2383C87.582 79.8242 86.9844 80.1172 86.2344 80.1172C85.4336 80.1172 84.8145 79.834 84.377 79.2676L84.3242 80H83.3281V71H84.4121V74.3574C84.8496 73.8145 85.4531 73.543 86.2227 73.543C86.9922 73.543 87.5957 73.834 88.0332 74.416C88.4746 74.998 88.6953 75.7949 88.6953 76.8066V76.9004ZM87.6113 76.7773C87.6113 76.0391 87.4688 75.4688 87.1836 75.0664C86.8984 74.6641 86.4883 74.4629 85.9531 74.4629C85.2383 74.4629 84.7246 74.7949 84.4121 75.459V78.2012C84.7441 78.8652 85.2617 79.1973 85.9648 79.1973C86.4844 79.1973 86.8887 78.9961 87.1777 78.5938C87.4668 78.1914 87.6113 77.5859 87.6113 76.7773ZM92.6973 80.1172C91.8379 80.1172 91.1387 79.8359 90.5996 79.2734C90.0605 78.707 89.791 77.9512 89.791 77.0059V76.8066C89.791 76.1777 89.9102 75.6172 90.1484 75.125C90.3906 74.6289 90.7266 74.2422 91.1562 73.9648C91.5898 73.6836 92.0586 73.543 92.5625 73.543C93.3867 73.543 94.0273 73.8145 94.4844 74.3574C94.9414 74.9004 95.1699 75.6777 95.1699 76.6895V77.1406H90.875C90.8906 77.7656 91.0723 78.2715 91.4199 78.6582C91.7715 79.041 92.2168 79.2324 92.7559 79.2324C93.1387 79.2324 93.4629 79.1543 93.7285 78.998C93.9941 78.8418 94.2266 78.6348 94.4258 78.377L95.0879 78.8926C94.5566 79.709 93.7598 80.1172 92.6973 80.1172ZM92.5625 74.4336C92.125 74.4336 91.7578 74.5938 91.4609 74.9141C91.1641 75.2305 90.9805 75.6758 90.9102 76.25H94.0859V76.168C94.0547 75.6172 93.9062 75.1914 93.6406 74.8906C93.375 74.5859 93.0156 74.4336 92.5625 74.4336ZM99.4941 74.6328C99.3301 74.6055 99.1523 74.5918 98.9609 74.5918C98.25 74.5918 97.7676 74.8945 97.5137 75.5V80H96.4297V73.6602H97.4844L97.502 74.3926C97.8574 73.8262 98.3613 73.543 99.0137 73.543C99.2246 73.543 99.3848 73.5703 99.4941 73.625V74.6328ZM71.3223 94H65.7324V93.2207L68.6855 89.9395C69.123 89.4434 69.4238 89.041 69.5879 88.7324C69.7559 88.4199 69.8398 88.0977 69.8398 87.7656C69.8398 87.3203 69.7051 86.9551 69.4355 86.6699C69.166 86.3848 68.8066 86.2422 68.3574 86.2422C67.8184 86.2422 67.3984 86.3965 67.0977 86.7051C66.8008 87.0098 66.6523 87.4355 66.6523 87.9824H65.5684C65.5684 87.1973 65.8203 86.5625 66.3242 86.0781C66.832 85.5938 67.5098 85.3516 68.3574 85.3516C69.1504 85.3516 69.7773 85.5605 70.2383 85.9785C70.6992 86.3926 70.9297 86.9453 70.9297 87.6367C70.9297 88.4766 70.3945 89.4766 69.3242 90.6367L67.0391 93.1152H71.3223V94ZM77.8203 90.3613C77.8203 91.6309 77.6035 92.5742 77.1699 93.1914C76.7363 93.8086 76.0586 94.1172 75.1367 94.1172C74.2266 94.1172 73.5527 93.8164 73.1152 93.2148C72.6777 92.6094 72.4512 91.707 72.4355 90.5078V89.0605C72.4355 87.8066 72.6523 86.875 73.0859 86.2656C73.5195 85.6562 74.1992 85.3516 75.125 85.3516C76.043 85.3516 76.7188 85.6465 77.1523 86.2363C77.5859 86.8223 77.8086 87.7285 77.8203 88.9551V90.3613ZM76.7363 88.8789C76.7363 87.9609 76.6074 87.293 76.3496 86.875C76.0918 86.4531 75.6836 86.2422 75.125 86.2422C74.5703 86.2422 74.166 86.4512 73.9121 86.8691C73.6582 87.2871 73.5273 87.9297 73.5195 88.7969V90.5312C73.5195 91.4531 73.6523 92.1348 73.918 92.5762C74.1875 93.0137 74.5938 93.2324 75.1367 93.2324C75.6719 93.2324 76.0684 93.0254 76.3262 92.6113C76.5879 92.1973 76.7246 91.5449 76.7363 90.6543V88.8789ZM82.7715 94H81.6816V86.7754L79.4961 87.5781V86.5938L82.6016 85.4277H82.7715V94ZM90.1016 90.25C89.875 90.5195 89.6035 90.7363 89.2871 90.9004C88.9746 91.0645 88.6309 91.1465 88.2559 91.1465C87.7637 91.1465 87.334 91.0254 86.9668 90.7832C86.6035 90.541 86.3223 90.2012 86.123 89.7637C85.9238 89.3223 85.8242 88.8359 85.8242 88.3047C85.8242 87.7344 85.9316 87.2207 86.1465 86.7637C86.3652 86.3066 86.6738 85.957 87.0723 85.7148C87.4707 85.4727 87.9355 85.3516 88.4668 85.3516C89.3105 85.3516 89.9746 85.668 90.459 86.3008C90.9473 86.9297 91.1914 87.7891 91.1914 88.8789V89.1953C91.1914 90.8555 90.8633 92.0684 90.207 92.834C89.5508 93.5957 88.5605 93.9863 87.2363 94.0059H87.0254V93.0918H87.2539C88.1484 93.0762 88.8359 92.8438 89.3164 92.3945C89.7969 91.9414 90.0586 91.2266 90.1016 90.25ZM88.4316 90.25C88.7949 90.25 89.1289 90.1387 89.4336 89.916C89.7422 89.6934 89.9668 89.418 90.1074 89.0898V88.6562C90.1074 87.9453 89.9531 87.3672 89.6445 86.9219C89.3359 86.4766 88.9453 86.2539 88.4727 86.2539C87.9961 86.2539 87.6133 86.4375 87.3242 86.8047C87.0352 87.168 86.8906 87.6484 86.8906 88.2461C86.8906 88.8281 87.0293 89.3086 87.3066 89.6875C87.5879 90.0625 87.9629 90.25 88.4316 90.25Z" fill="#67EFF0"/>
                    <Circle cx="80" cy="80" r="80" fill="#76DF76"/>
                    <Path d="M160 80C160 96.764 154.734 113.104 144.945 126.714C135.156 140.323 121.339 150.513 105.446 155.845C89.5528 161.177 72.386 161.382 56.37 156.431C40.354 151.479 26.2983 141.621 16.1877 128.249C6.07706 114.877 0.422581 98.6672 0.0227566 81.908C-0.377068 65.1488 4.49797 48.6875 13.9594 34.8487C23.4208 21.0099 36.9905 10.493 52.7522 4.78328C68.5138 -0.926494 85.6709 -1.54061 101.8 3.02764L80 80H160Z" fill="#E02339"/>
                    <Circle cx="79" cy="80" r="40" fill="#0F7DBC"/>
                    <Path d="M64.877 76.0098C64.877 76.8457 64.7363 77.5762 64.4551 78.2012C64.1738 78.8223 63.7754 79.2969 63.2598 79.625C62.7441 79.9531 62.1426 80.1172 61.4551 80.1172C60.7832 80.1172 60.1875 79.9531 59.668 79.625C59.1484 79.293 58.7441 78.8223 58.4551 78.2129C58.1699 77.5996 58.0234 76.8906 58.0156 76.0859V75.4707C58.0156 74.6504 58.1582 73.9258 58.4434 73.2969C58.7285 72.668 59.1309 72.1875 59.6504 71.8555C60.1738 71.5195 60.7715 71.3516 61.4434 71.3516C62.127 71.3516 62.7285 71.5176 63.248 71.8496C63.7715 72.1777 64.1738 72.6562 64.4551 73.2852C64.7363 73.9102 64.877 74.6387 64.877 75.4707V76.0098ZM63.7578 75.459C63.7578 74.4473 63.5547 73.6719 63.1484 73.1328C62.7422 72.5898 62.1738 72.3184 61.4434 72.3184C60.7324 72.3184 60.1719 72.5898 59.7617 73.1328C59.3555 73.6719 59.1465 74.4219 59.1348 75.3828V76.0098C59.1348 76.9902 59.3398 77.7617 59.75 78.3242C60.1641 78.8828 60.7324 79.1621 61.4551 79.1621C62.1816 79.1621 62.7441 78.8984 63.1426 78.3711C63.541 77.8398 63.7461 77.0801 63.7578 76.0918V75.459ZM68.9375 79.2324C69.3242 79.2324 69.6621 79.1152 69.9512 78.8809C70.2402 78.6465 70.4004 78.3535 70.4316 78.002H71.457C71.4375 78.3652 71.3125 78.7109 71.082 79.0391C70.8516 79.3672 70.543 79.6289 70.1562 79.8242C69.7734 80.0195 69.3672 80.1172 68.9375 80.1172C68.0742 80.1172 67.3867 79.8301 66.875 79.2559C66.3672 78.6777 66.1133 77.8887 66.1133 76.8887V76.707C66.1133 76.0898 66.2266 75.541 66.4531 75.0605C66.6797 74.5801 67.0039 74.207 67.4258 73.9414C67.8516 73.6758 68.3535 73.543 68.9316 73.543C69.6426 73.543 70.2324 73.7559 70.7012 74.1816C71.1738 74.6074 71.4258 75.1602 71.457 75.8398H70.4316C70.4004 75.4297 70.2441 75.0938 69.9629 74.832C69.6855 74.5664 69.3418 74.4336 68.9316 74.4336C68.3809 74.4336 67.9531 74.6328 67.6484 75.0312C67.3477 75.4258 67.1973 75.998 67.1973 76.748V76.9531C67.1973 77.6836 67.3477 78.2461 67.6484 78.6406C67.9492 79.0352 68.3789 79.2324 68.9375 79.2324ZM74.1465 72.125V73.6602H75.3301V74.498H74.1465V78.4297C74.1465 78.6836 74.1992 78.875 74.3047 79.0039C74.4102 79.1289 74.5898 79.1914 74.8438 79.1914C74.9688 79.1914 75.1406 79.168 75.3594 79.1211V80C75.0742 80.0781 74.7969 80.1172 74.5273 80.1172C74.043 80.1172 73.6777 79.9707 73.4316 79.6777C73.1855 79.3848 73.0625 78.9688 73.0625 78.4297V74.498H71.9082V73.6602H73.0625V72.125H74.1465ZM76.1973 76.7715C76.1973 76.1504 76.3184 75.5918 76.5605 75.0957C76.8066 74.5996 77.1465 74.2168 77.5801 73.9473C78.0176 73.6777 78.5156 73.543 79.0742 73.543C79.9375 73.543 80.6348 73.8418 81.166 74.4395C81.7012 75.0371 81.9688 75.832 81.9688 76.8242V76.9004C81.9688 77.5176 81.8496 78.0723 81.6113 78.5645C81.377 79.0527 81.0391 79.4336 80.5977 79.707C80.1602 79.9805 79.6562 80.1172 79.0859 80.1172C78.2266 80.1172 77.5293 79.8184 76.9941 79.2207C76.4629 78.623 76.1973 77.832 76.1973 76.8477V76.7715ZM77.2871 76.9004C77.2871 77.6035 77.4492 78.168 77.7734 78.5938C78.1016 79.0195 78.5391 79.2324 79.0859 79.2324C79.6367 79.2324 80.0742 79.0176 80.3984 78.5879C80.7227 78.1543 80.8848 77.5488 80.8848 76.7715C80.8848 76.0762 80.7188 75.5137 80.3867 75.084C80.0586 74.6504 79.6211 74.4336 79.0742 74.4336C78.5391 74.4336 78.1074 74.6465 77.7793 75.0723C77.4512 75.498 77.2871 76.1074 77.2871 76.9004ZM88.6953 76.9004C88.6953 77.8691 88.4727 78.6484 88.0273 79.2383C87.582 79.8242 86.9844 80.1172 86.2344 80.1172C85.4336 80.1172 84.8145 79.834 84.377 79.2676L84.3242 80H83.3281V71H84.4121V74.3574C84.8496 73.8145 85.4531 73.543 86.2227 73.543C86.9922 73.543 87.5957 73.834 88.0332 74.416C88.4746 74.998 88.6953 75.7949 88.6953 76.8066V76.9004ZM87.6113 76.7773C87.6113 76.0391 87.4688 75.4688 87.1836 75.0664C86.8984 74.6641 86.4883 74.4629 85.9531 74.4629C85.2383 74.4629 84.7246 74.7949 84.4121 75.459V78.2012C84.7441 78.8652 85.2617 79.1973 85.9648 79.1973C86.4844 79.1973 86.8887 78.9961 87.1777 78.5938C87.4668 78.1914 87.6113 77.5859 87.6113 76.7773ZM92.6973 80.1172C91.8379 80.1172 91.1387 79.8359 90.5996 79.2734C90.0605 78.707 89.791 77.9512 89.791 77.0059V76.8066C89.791 76.1777 89.9102 75.6172 90.1484 75.125C90.3906 74.6289 90.7266 74.2422 91.1562 73.9648C91.5898 73.6836 92.0586 73.543 92.5625 73.543C93.3867 73.543 94.0273 73.8145 94.4844 74.3574C94.9414 74.9004 95.1699 75.6777 95.1699 76.6895V77.1406H90.875C90.8906 77.7656 91.0723 78.2715 91.4199 78.6582C91.7715 79.041 92.2168 79.2324 92.7559 79.2324C93.1387 79.2324 93.4629 79.1543 93.7285 78.998C93.9941 78.8418 94.2266 78.6348 94.4258 78.377L95.0879 78.8926C94.5566 79.709 93.7598 80.1172 92.6973 80.1172ZM92.5625 74.4336C92.125 74.4336 91.7578 74.5938 91.4609 74.9141C91.1641 75.2305 90.9805 75.6758 90.9102 76.25H94.0859V76.168C94.0547 75.6172 93.9062 75.1914 93.6406 74.8906C93.375 74.5859 93.0156 74.4336 92.5625 74.4336ZM99.4941 74.6328C99.3301 74.6055 99.1523 74.5918 98.9609 74.5918C98.25 74.5918 97.7676 74.8945 97.5137 75.5V80H96.4297V73.6602H97.4844L97.502 74.3926C97.8574 73.8262 98.3613 73.543 99.0137 73.543C99.2246 73.543 99.3848 73.5703 99.4941 73.625V74.6328ZM71.3223 94H65.7324V93.2207L68.6855 89.9395C69.123 89.4434 69.4238 89.041 69.5879 88.7324C69.7559 88.4199 69.8398 88.0977 69.8398 87.7656C69.8398 87.3203 69.7051 86.9551 69.4355 86.6699C69.166 86.3848 68.8066 86.2422 68.3574 86.2422C67.8184 86.2422 67.3984 86.3965 67.0977 86.7051C66.8008 87.0098 66.6523 87.4355 66.6523 87.9824H65.5684C65.5684 87.1973 65.8203 86.5625 66.3242 86.0781C66.832 85.5938 67.5098 85.3516 68.3574 85.3516C69.1504 85.3516 69.7773 85.5605 70.2383 85.9785C70.6992 86.3926 70.9297 86.9453 70.9297 87.6367C70.9297 88.4766 70.3945 89.4766 69.3242 90.6367L67.0391 93.1152H71.3223V94ZM77.8203 90.3613C77.8203 91.6309 77.6035 92.5742 77.1699 93.1914C76.7363 93.8086 76.0586 94.1172 75.1367 94.1172C74.2266 94.1172 73.5527 93.8164 73.1152 93.2148C72.6777 92.6094 72.4512 91.707 72.4355 90.5078V89.0605C72.4355 87.8066 72.6523 86.875 73.0859 86.2656C73.5195 85.6562 74.1992 85.3516 75.125 85.3516C76.043 85.3516 76.7188 85.6465 77.1523 86.2363C77.5859 86.8223 77.8086 87.7285 77.8203 88.9551V90.3613ZM76.7363 88.8789C76.7363 87.9609 76.6074 87.293 76.3496 86.875C76.0918 86.4531 75.6836 86.2422 75.125 86.2422C74.5703 86.2422 74.166 86.4512 73.9121 86.8691C73.6582 87.2871 73.5273 87.9297 73.5195 88.7969V90.5312C73.5195 91.4531 73.6523 92.1348 73.918 92.5762C74.1875 93.0137 74.5938 93.2324 75.1367 93.2324C75.6719 93.2324 76.0684 93.0254 76.3262 92.6113C76.5879 92.1973 76.7246 91.5449 76.7363 90.6543V88.8789ZM82.7715 94H81.6816V86.7754L79.4961 87.5781V86.5938L82.6016 85.4277H82.7715V94ZM90.1016 90.25C89.875 90.5195 89.6035 90.7363 89.2871 90.9004C88.9746 91.0645 88.6309 91.1465 88.2559 91.1465C87.7637 91.1465 87.334 91.0254 86.9668 90.7832C86.6035 90.541 86.3223 90.2012 86.123 89.7637C85.9238 89.3223 85.8242 88.8359 85.8242 88.3047C85.8242 87.7344 85.9316 87.2207 86.1465 86.7637C86.3652 86.3066 86.6738 85.957 87.0723 85.7148C87.4707 85.4727 87.9355 85.3516 88.4668 85.3516C89.3105 85.3516 89.9746 85.668 90.459 86.3008C90.9473 86.9297 91.1914 87.7891 91.1914 88.8789V89.1953C91.1914 90.8555 90.8633 92.0684 90.207 92.834C89.5508 93.5957 88.5605 93.9863 87.2363 94.0059H87.0254V93.0918H87.2539C88.1484 93.0762 88.8359 92.8438 89.3164 92.3945C89.7969 91.9414 90.0586 91.2266 90.1016 90.25ZM88.4316 90.25C88.7949 90.25 89.1289 90.1387 89.4336 89.916C89.7422 89.6934 89.9668 89.418 90.1074 89.0898V88.6562C90.1074 87.9453 89.9531 87.3672 89.6445 86.9219C89.3359 86.4766 88.9453 86.2539 88.4727 86.2539C87.9961 86.2539 87.6133 86.4375 87.3242 86.8047C87.0352 87.168 86.8906 87.6484 86.8906 88.2461C86.8906 88.8281 87.0293 89.3086 87.3066 89.6875C87.5879 90.0625 87.9629 90.25 88.4316 90.25Z" fill="#67EFF0"/>
                    <Circle cx="80" cy="80" r="80" fill="#76DF76"/>
                    <Path d="M160 80C160 96.764 154.734 113.104 144.945 126.714C135.156 140.323 121.339 150.513 105.446 155.845C89.5528 161.177 72.386 161.382 56.37 156.431C40.354 151.479 26.2983 141.621 16.1877 128.249C6.07706 114.877 0.422581 98.6672 0.0227566 81.908C-0.377068 65.1488 4.49797 48.6875 13.9594 34.8487C23.4208 21.0099 36.9905 10.493 52.7522 4.78328C68.5138 -0.926494 85.6709 -1.54061 101.8 3.02764L80 80H160Z" fill="#E02339"/>
                    <Circle cx="79" cy="80" r="40" fill="#0F7DBC"/>
                    <Path d="M64.877 76.0098C64.877 76.8457 64.7363 77.5762 64.4551 78.2012C64.1738 78.8223 63.7754 79.2969 63.2598 79.625C62.7441 79.9531 62.1426 80.1172 61.4551 80.1172C60.7832 80.1172 60.1875 79.9531 59.668 79.625C59.1484 79.293 58.7441 78.8223 58.4551 78.2129C58.1699 77.5996 58.0234 76.8906 58.0156 76.0859V75.4707C58.0156 74.6504 58.1582 73.9258 58.4434 73.2969C58.7285 72.668 59.1309 72.1875 59.6504 71.8555C60.1738 71.5195 60.7715 71.3516 61.4434 71.3516C62.127 71.3516 62.7285 71.5176 63.248 71.8496C63.7715 72.1777 64.1738 72.6562 64.4551 73.2852C64.7363 73.9102 64.877 74.6387 64.877 75.4707V76.0098ZM63.7578 75.459C63.7578 74.4473 63.5547 73.6719 63.1484 73.1328C62.7422 72.5898 62.1738 72.3184 61.4434 72.3184C60.7324 72.3184 60.1719 72.5898 59.7617 73.1328C59.3555 73.6719 59.1465 74.4219 59.1348 75.3828V76.0098C59.1348 76.9902 59.3398 77.7617 59.75 78.3242C60.1641 78.8828 60.7324 79.1621 61.4551 79.1621C62.1816 79.1621 62.7441 78.8984 63.1426 78.3711C63.541 77.8398 63.7461 77.0801 63.7578 76.0918V75.459ZM68.9375 79.2324C69.3242 79.2324 69.6621 79.1152 69.9512 78.8809C70.2402 78.6465 70.4004 78.3535 70.4316 78.002H71.457C71.4375 78.3652 71.3125 78.7109 71.082 79.0391C70.8516 79.3672 70.543 79.6289 70.1562 79.8242C69.7734 80.0195 69.3672 80.1172 68.9375 80.1172C68.0742 80.1172 67.3867 79.8301 66.875 79.2559C66.3672 78.6777 66.1133 77.8887 66.1133 76.8887V76.707C66.1133 76.0898 66.2266 75.541 66.4531 75.0605C66.6797 74.5801 67.0039 74.207 67.4258 73.9414C67.8516 73.6758 68.3535 73.543 68.9316 73.543C69.6426 73.543 70.2324 73.7559 70.7012 74.1816C71.1738 74.6074 71.4258 75.1602 71.457 75.8398H70.4316C70.4004 75.4297 70.2441 75.0938 69.9629 74.832C69.6855 74.5664 69.3418 74.4336 68.9316 74.4336C68.3809 74.4336 67.9531 74.6328 67.6484 75.0312C67.3477 75.4258 67.1973 75.998 67.1973 76.748V76.9531C67.1973 77.6836 67.3477 78.2461 67.6484 78.6406C67.9492 79.0352 68.3789 79.2324 68.9375 79.2324ZM74.1465 72.125V73.6602H75.3301V74.498H74.1465V78.4297C74.1465 78.6836 74.1992 78.875 74.3047 79.0039C74.4102 79.1289 74.5898 79.1914 74.8438 79.1914C74.9688 79.1914 75.1406 79.168 75.3594 79.1211V80C75.0742 80.0781 74.7969 80.1172 74.5273 80.1172C74.043 80.1172 73.6777 79.9707 73.4316 79.6777C73.1855 79.3848 73.0625 78.9688 73.0625 78.4297V74.498H71.9082V73.6602H73.0625V72.125H74.1465ZM76.1973 76.7715C76.1973 76.1504 76.3184 75.5918 76.5605 75.0957C76.8066 74.5996 77.1465 74.2168 77.5801 73.9473C78.0176 73.6777 78.5156 73.543 79.0742 73.543C79.9375 73.543 80.6348 73.8418 81.166 74.4395C81.7012 75.0371 81.9688 75.832 81.9688 76.8242V76.9004C81.9688 77.5176 81.8496 78.0723 81.6113 78.5645C81.377 79.0527 81.0391 79.4336 80.5977 79.707C80.1602 79.9805 79.6562 80.1172 79.0859 80.1172C78.2266 80.1172 77.5293 79.8184 76.9941 79.2207C76.4629 78.623 76.1973 77.832 76.1973 76.8477V76.7715ZM77.2871 76.9004C77.2871 77.6035 77.4492 78.168 77.7734 78.5938C78.1016 79.0195 78.5391 79.2324 79.0859 79.2324C79.6367 79.2324 80.0742 79.0176 80.3984 78.5879C80.7227 78.1543 80.8848 77.5488 80.8848 76.7715C80.8848 76.0762 80.7188 75.5137 80.3867 75.084C80.0586 74.6504 79.6211 74.4336 79.0742 74.4336C78.5391 74.4336 78.1074 74.6465 77.7793 75.0723C77.4512 75.498 77.2871 76.1074 77.2871 76.9004ZM88.6953 76.9004C88.6953 77.8691 88.4727 78.6484 88.0273 79.2383C87.582 79.8242 86.9844 80.1172 86.2344 80.1172C85.4336 80.1172 84.8145 79.834 84.377 79.2676L84.3242 80H83.3281V71H84.4121V74.3574C84.8496 73.8145 85.4531 73.543 86.2227 73.543C86.9922 73.543 87.5957 73.834 88.0332 74.416C88.4746 74.998 88.6953 75.7949 88.6953 76.8066V76.9004ZM87.6113 76.7773C87.6113 76.0391 87.4688 75.4688 87.1836 75.0664C86.8984 74.6641 86.4883 74.4629 85.9531 74.4629C85.2383 74.4629 84.7246 74.7949 84.4121 75.459V78.2012C84.7441 78.8652 85.2617 79.1973 85.9648 79.1973C86.4844 79.1973 86.8887 78.9961 87.1777 78.5938C87.4668 78.1914 87.6113 77.5859 87.6113 76.7773ZM92.6973 80.1172C91.8379 80.1172 91.1387 79.8359 90.5996 79.2734C90.0605 78.707 89.791 77.9512 89.791 77.0059V76.8066C89.791 76.1777 89.9102 75.6172 90.1484 75.125C90.3906 74.6289 90.7266 74.2422 91.1562 73.9648C91.5898 73.6836 92.0586 73.543 92.5625 73.543C93.3867 73.543 94.0273 73.8145 94.4844 74.3574C94.9414 74.9004 95.1699 75.6777 95.1699 76.6895V77.1406H90.875C90.8906 77.7656 91.0723 78.2715 91.4199 78.6582C91.7715 79.041 92.2168 79.2324 92.7559 79.2324C93.1387 79.2324 93.4629 79.1543 93.7285 78.998C93.9941 78.8418 94.2266 78.6348 94.4258 78.377L95.0879 78.8926C94.5566 79.709 93.7598 80.1172 92.6973 80.1172ZM92.5625 74.4336C92.125 74.4336 91.7578 74.5938 91.4609 74.9141C91.1641 75.2305 90.9805 75.6758 90.9102 76.25H94.0859V76.168C94.0547 75.6172 93.9062 75.1914 93.6406 74.8906C93.375 74.5859 93.0156 74.4336 92.5625 74.4336ZM99.4941 74.6328C99.3301 74.6055 99.1523 74.5918 98.9609 74.5918C98.25 74.5918 97.7676 74.8945 97.5137 75.5V80H96.4297V73.6602H97.4844L97.502 74.3926C97.8574 73.8262 98.3613 73.543 99.0137 73.543C99.2246 73.543 99.3848 73.5703 99.4941 73.625V74.6328ZM71.3223 94H65.7324V93.2207L68.6855 89.9395C69.123 89.4434 69.4238 89.041 69.5879 88.7324C69.7559 88.4199 69.8398 88.0977 69.8398 87.7656C69.8398 87.3203 69.7051 86.9551 69.4355 86.6699C69.166 86.3848 68.8066 86.2422 68.3574 86.2422C67.8184 86.2422 67.3984 86.3965 67.0977 86.7051C66.8008 87.0098 66.6523 87.4355 66.6523 87.9824H65.5684C65.5684 87.1973 65.8203 86.5625 66.3242 86.0781C66.832 85.5938 67.5098 85.3516 68.3574 85.3516C69.1504 85.3516 69.7773 85.5605 70.2383 85.9785C70.6992 86.3926 70.9297 86.9453 70.9297 87.6367C70.9297 88.4766 70.3945 89.4766 69.3242 90.6367L67.0391 93.1152H71.3223V94ZM77.8203 90.3613C77.8203 91.6309 77.6035 92.5742 77.1699 93.1914C76.7363 93.8086 76.0586 94.1172 75.1367 94.1172C74.2266 94.1172 73.5527 93.8164 73.1152 93.2148C72.6777 92.6094 72.4512 91.707 72.4355 90.5078V89.0605C72.4355 87.8066 72.6523 86.875 73.0859 86.2656C73.5195 85.6562 74.1992 85.3516 75.125 85.3516C76.043 85.3516 76.7188 85.6465 77.1523 86.2363C77.5859 86.8223 77.8086 87.7285 77.8203 88.9551V90.3613ZM76.7363 88.8789C76.7363 87.9609 76.6074 87.293 76.3496 86.875C76.0918 86.4531 75.6836 86.2422 75.125 86.2422C74.5703 86.2422 74.166 86.4512 73.9121 86.8691C73.6582 87.2871 73.5273 87.9297 73.5195 88.7969V90.5312C73.5195 91.4531 73.6523 92.1348 73.918 92.5762C74.1875 93.0137 74.5938 93.2324 75.1367 93.2324C75.6719 93.2324 76.0684 93.0254 76.3262 92.6113C76.5879 92.1973 76.7246 91.5449 76.7363 90.6543V88.8789ZM82.7715 94H81.6816V86.7754L79.4961 87.5781V86.5938L82.6016 85.4277H82.7715V94ZM90.1016 90.25C89.875 90.5195 89.6035 90.7363 89.2871 90.9004C88.9746 91.0645 88.6309 91.1465 88.2559 91.1465C87.7637 91.1465 87.334 91.0254 86.9668 90.7832C86.6035 90.541 86.3223 90.2012 86.123 89.7637C85.9238 89.3223 85.8242 88.8359 85.8242 88.3047C85.8242 87.7344 85.9316 87.2207 86.1465 86.7637C86.3652 86.3066 86.6738 85.957 87.0723 85.7148C87.4707 85.4727 87.9355 85.3516 88.4668 85.3516C89.3105 85.3516 89.9746 85.668 90.459 86.3008C90.9473 86.9297 91.1914 87.7891 91.1914 88.8789V89.1953C91.1914 90.8555 90.8633 92.0684 90.207 92.834C89.5508 93.5957 88.5605 93.9863 87.2363 94.0059H87.0254V93.0918H87.2539C88.1484 93.0762 88.8359 92.8438 89.3164 92.3945C89.7969 91.9414 90.0586 91.2266 90.1016 90.25ZM88.4316 90.25C88.7949 90.25 89.1289 90.1387 89.4336 89.916C89.7422 89.6934 89.9668 89.418 90.1074 89.0898V88.6562C90.1074 87.9453 89.9531 87.3672 89.6445 86.9219C89.3359 86.4766 88.9453 86.2539 88.4727 86.2539C87.9961 86.2539 87.6133 86.4375 87.3242 86.8047C87.0352 87.168 86.8906 87.6484 86.8906 88.2461C86.8906 88.8281 87.0293 89.3086 87.3066 89.6875C87.5879 90.0625 87.9629 90.25 88.4316 90.25Z" fill="#67EFF0"/>
                    <Circle cx="80" cy="80" r="80" fill="#76DF76"/>
                    <Path d="M160 80C160 96.764 154.734 113.104 144.945 126.714C135.156 140.323 121.339 150.513 105.446 155.845C89.5528 161.177 72.386 161.382 56.37 156.431C40.354 151.479 26.2983 141.621 16.1877 128.249C6.07706 114.877 0.422581 98.6672 0.0227566 81.908C-0.377068 65.1488 4.49797 48.6875 13.9594 34.8487C23.4208 21.0099 36.9905 10.493 52.7522 4.78328C68.5138 -0.926494 85.6709 -1.54061 101.8 3.02764L80 80H160Z" fill="#EF5C5C"/>
                    <Circle cx="79" cy="80" r="40" fill="#AE66D8"/>
                </Svg>
        );
    }
}