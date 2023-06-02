import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screent from './Screent';
const Tab = createMaterialTopTabNavigator();
const data = [

  {
    "id": "1",
    "name": "first"
  },
  {
    "id": "2",
    "name": "second"
  },
  {
    "id": "3",
    "name": "third"
  },
  {
    "id": "4",
    "name": "fourth"
  },
  {
    "id": "5",
    "name": "fifth"
  },

]
const MyScreen = (props) => {
  const { name } = props
  return (

    <View>
      <Text>alo</Text>
    </View>
  )
}
const TestTopTab = () => {
  return (
    <View>
      <Text>shit</Text>
      <View style={{ marginTop: 100, height: 500 }}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarPosition='top'
            screenOptions={{
              tabBarScrollEnabled: true,
              tabBarLabelStyle: {
                textTransform: 'capitalize'
              },
              tabBarItemStyle: {
                width: 100
              },
              tabBarIndicatorStyle: {
                backgroundColor: 'red'
              },
              tabBarActiveTintColor: 'red',
              tabBarInactiveTintColor: 'black',
              lazy: true
            }}
          >
            {/* {
              data.map(item => <Tab.Screen name={item.name} key={item.id} component={item=>{
                return(
                  <View><Text>{item.name}alo</Text></View>
                )
              }} />)
            } */}
  {
              data.map(item => <Tab.Screen name={item.name} key={item.id} children={()=>{
                return(
                  <View><Text>{item.name}</Text></View>
                )
              }} />)
            }

          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>

  )
}

export default TestTopTab

const styles = StyleSheet.create({})