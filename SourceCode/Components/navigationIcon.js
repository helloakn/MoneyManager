import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
interface NavigationIconProps {
  route: string, 
  isFocused: boolean
}

const  NavigationIcon = ({route, isFocused}: NavigationIconProps) => {
  const renderIcon = (route: string, isFocues: boolean) =>{
    let height: number = 20;
    let width: number = 20;
  
    switch (route) {
      case "home":
        return isFocues?<FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.userPlus} />:<FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.user} />
      case "analytics":
        return isFocues?<FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.user} />:<FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.user} />
      case "AccountScreen":
        return isFocues?<FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.users} />: <FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.users} />
      case "SettingScreen":
        return isFocues?<FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.cog} />:<FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.cog} />
        case "CategoryScreen":
        return isFocues?<FontAwesome style={{color:'#ffffff',fontSize:20}} icon={SolidIcons.layerGroup} />:<FontAwesome style={{color:'#563469',fontSize:20}} icon={SolidIcons.layerGroup} />
      default:
        break;
    }
  }

  return (
    <View>
      {renderIcon(route, isFocused)}
    </View>
  
  )
}

const styles = StyleSheet.create({})

export default NavigationIcon