import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import News from './News'
import Profile1 from './Profile1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './Explore';
import Bookmark from './Bookmark';
import BottomNavIcon from './Components/BottomNavIcon';
import BottomNavIconNotActive from './Components/BottomNavIconNotActive';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from './Contants/Colors';

const Tab = createBottomTabNavigator();
const NavigatorScreen = () => {
  return (

<Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
           

            if (route.name === 'Home') {
             return focused ? <BottomNavIcon type="Home"/> : <BottomNavIconNotActive type="Home"/>
            } else if (route.name === 'Explore') {
              return focused ? <BottomNavIcon type="Explore"/> : <BottomNavIconNotActive type="Explore"/>
            }else if (route.name === 'Bookmark') {
              return focused ? <BottomNavIcon type="Bookmark"/> : <BottomNavIconNotActive type="Bookmark"/>
            }else if(route.name === 'Profile')
            return focused ? <BottomNavIcon type="Profile"/> : <BottomNavIconNotActive type="Profile"/>
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.bodyText,
        })} >
  <Tab.Screen name="Home" component={News} />
  <Tab.Screen name="Explore" component={Explore} />
  <Tab.Screen name="Bookmark" component={Bookmark} />
  <Tab.Screen name="Profile" component={Profile1} />
</Tab.Navigator>

  )
}

export default NavigatorScreen

const styles = StyleSheet.create({})