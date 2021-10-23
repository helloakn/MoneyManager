import * as React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



import {AccountListScreen,AccountDetailScreen,TransactionListScreen} from '../Screens/Account';
import {CategoryListScreen} from '../Screens/Category';

import TabBar from '../Components/TabBar';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();
let navigatorHeight = 600;
function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }


function AccountTabs(){
    return(
        <Stack.Navigator initialRouteName={"AccountListScreen"} screenOptions={{headerShown:false}}>
            <Stack.Screen name="AccountListScreen" component={AccountListScreen} options={{ headerShown: false,}}/>
            <Stack.Screen name="AccountDetailScreen" component={AccountDetailScreen} options={{ headerShown: false,}}/>
            <Stack.Screen name="TransactionListScreen" component={TransactionListScreen} options={{ headerShown: false,}}/>
        </Stack.Navigator>
    );
}

function CategoryTabs(){
    return(
        <Stack.Navigator initialRouteName={"CategoryListScreen"} screenOptions={{headerShown:false}}>
            <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} options={{ headerShown: false,}}/>
        </Stack.Navigator>
    );
}

  function InitTabs() {
    return (
        <Tab.Navigator initialRouteName={"AccountTabs"} tabBar={props => <TabBar {...props} />} >
            <Tab.Screen name="AccountTabs" component={AccountTabs} options={{headerShown: false,}}/>
            <Tab.Screen name="CategoryScreen" component={CategoryTabs} options={{headerShown: false,}}/>
            <Tab.Screen name="SettingScreen" component={SettingsScreen} options={{headerShown: false,}}/>
      </Tab.Navigator>
    );
  }

export default function Navigator() {
    return (
        <>
        <NavigationContainer>
        <Stack.Navigator initialRouteName={"InitTabs"} screenOptions={{headerShown:false}}>
            <Stack.Screen name="InitTabs" component={InitTabs} options={{ headerShown: false,}}/>
        </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }

  /*
   <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={
                    {
                        headerShown: false,
                    }
                }/>
                <Stack.Screen name="Setting" component={SettingsScreen} options={
                    {
                        headerShown: false,
                    }
                }/>
            </Stack.Navigator>
            */
  /*
   <Tab.Navigator
            
           
            screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                
                return <FontAwesome style={{color:'#000000',fontSize:20}} icon={SolidIcons.userPlus} />;
                },
                tabBarActiveTintColor: '#F4E1FF',
                tabBarInactiveTintColor: '#62347C',
                tabBarActiveBackgroundColor:"#AE66D8",
                tabBarInactiveBackgroundColor:"#AE66D8",
                style:{backgroundColor:'#222E39',height:navigatorHeight},

            })}
            >
            <Tab.Screen name="Accounts" component={SettingsScreen}  options={{
                headerShown: false,
                style:{backgroundColor:'#222E39',height:navigatorHeight},
                tabBarIcon: ({ focused, color, size }) => {
                    return <FontAwesome style={{color:(focused?'#F4E1FF':'#62347C'),fontSize:16}} icon={SolidIcons.users} />;
                }}
            }/>
            <Tab.Screen name="Category" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <FontAwesome style={{color:(focused?'#F4E1FF':'#62347C'),fontSize:16}} icon={SolidIcons.layerGroup} />;
                }}
            }/>
            <Tab.Screen name="Setting" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <FontAwesome style={{color:(focused?'#F4E1FF':'#62347C'),fontSize:16}} icon={SolidIcons.cog} />;
                }}
            }/>
            </Tab.Navigator>
            */