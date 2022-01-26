import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NotifiScreen from "./NotifiScreen";
import ScanScreen from './ScanScreen'
import LogScreen from './LogScreen'
import CartScreen from './CartScreen'
import Scanner from "./Scan";
import ic_bottom_home from '../../src/asset/images/ic_bottom_home_1x.png'
import ic_bottom_notifi from '../../src/asset/images/ic_bottom_bell_1x.png'
import ic_bottom_scan from '../../src/asset/images/ic_scan_black_1x.png'
import ic_bottom_clock from '../../src/asset/images/ic_bottom_clock_1x.png'
import ic_bottom_cart from '../../src/asset/images/ic_cart_1x.png'
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
   
      <Tab.Navigator initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingTop: 21,
          paddingBottom: 10,
          height: 80,
          paddingLeft: 30,
          paddingRight: 30
        },
        headerShown: false
      }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
          tabBarIcon: ({focused, color, size})=>(
            <View style={{
              backgroundColor: focused? '#D0EDFB' :'white',
              padding: 13,
              borderRadius: 11,
            }}>
              <Image source={ic_bottom_home} resizeMode="contain" style={{
                tintColor: focused ? '#2DC0FF' : '#BBBBBB',
              }}/>
            </View>
          ),
          tabBarShowLabel: false,
          
        }} />
        <Tab.Screen name="NotifiScreen" component={NotifiScreen} options={{headerShown: false}} options={{
          tabBarIcon: ({focused, color, size})=>(
            <View style={{
              width: 47,
              height: 47,
              backgroundColor: focused? '#D0EDFB' :'white',
              padding: 13,
              borderRadius: 11
            }}>
              <Image source={ic_bottom_notifi} resizeMode="contain" style={{
                tintColor: focused ? '#2DC0FF' : '#BBBBBB'
              }}/>
            </View>
          ),
          tabBarShowLabel: false
        }} />
        <Tab.Screen name="ScanScreen" component={Scanner} options={{headerShown: false}} options={{
          tabBarIcon: ({focused, color, size})=>(
            <View style={{
              backgroundColor: focused? '#D0EDFB' :'white',
              padding: 13,
              borderRadius: 11
            }}>
              <Image source={ic_bottom_scan} resizeMode="contain" style={{
                tintColor: focused ? '#2DC0FF' : '#BBBBBB'
              }}/>
            </View>
          ),
          tabBarShowLabel: false
        }} />
        <Tab.Screen name="LogScreen" component={LogScreen} options={{headerShown: false}} options={{
          tabBarIcon: ({focused, color, size})=>(
            <View style={{
              backgroundColor: focused? '#D0EDFB' :'white',
              padding: 13,
              borderRadius: 11
            }}>
              <Image source={ic_bottom_clock} resizeMode="contain" style={{
                tintColor: focused ? '#2DC0FF' : '#BBBBBB'
              }}/>
            </View>
          ),
          tabBarShowLabel: false
        }} />
        <Tab.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}} options={{
          tabBarIcon: ({focused, color, size})=>(
            <View style={{
              backgroundColor: focused? '#D0EDFB' :'white',
              padding: 13,
              borderRadius: 11
            }}>
              <Image source={ic_bottom_cart} resizeMode="contain" style={{
                tintColor: focused ? '#2DC0FF' : '#BBBBBB'
              }}/>
            </View>
          ),
          tabBarShowLabel: false
        }} />
      </Tab.Navigator>

  );
};
export default TabNavigator;
