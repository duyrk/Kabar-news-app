import React from 'react';
import {
  SafeAreaView, Text, StyleSheet, Settings, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TinhToan from './android/app/src/labs/TinhToan';
import XoSo from './android/app/src/labs/XoSo';
import Tinhtoan2 from './android/app/src/labs/Tinhtoan2';
import Login from './android/app/src/asm/Login';
import Login1 from './android/app/src/asm/SignUp';
import SignUp from './android/app/src/asm/SignUp';
import Profile1 from './android/app/src/asm/Profile1';
import ItemListNews from './android/app/src/asm/ItemListNews';
import News from './android/app/src/asm/News';
import DetailNews from './android/app/src/asm/DetailNews';
import DetailNewsParticle from './android/app/src/asm/DetailNewsParticle';
import InputField from './android/app/src/asm/Components/InputField';
import Buttons from './android/app/src/asm/Components/Buttons';
import InputFieldIcon from './android/app/src/asm/Components/InputFieldIcon';
import Trending from './android/app/src/asm/Trending';
import Latest from './android/app/src/asm/Lastest';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigatorScreen from './android/app/src/asm/NavigatorScreen';
import DemoGetAPi from './android/app/src/asm/DemoGetAPi';
import { AppContextProvider } from './android/app/src/asm/util/AppContext';
import AppNavigator from './android/app/src/asm/AppNavigator';
import UserProfile from './android/app/src/asm/UserProfile';
import ProfileSettings from './android/app/src/asm/ProfileSettings';
import CreateNews from './android/app/src/asm/CreateNews';
import { Colors } from './android/app/src/asm/Contants/Colors';
import FindNews from './android/app/src/asm/FindNews';
import ChangePass from './android/app/src/asm/ChangePass';
import Dangky from './android/app/src/baove/Dangky';
import Favorite from './android/app/src/baove/Favorite';
import Item from './android/app/src/baove/Item';
import TestTopTab from './android/app/src/Testing/testTopTab';
import TopTab from './android/app/src/Testing/TopTab';
import Test from './android/app/src/Testing/Test';
import Test2 from './android/app/src/Testing/Test2';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const Hello = () =>{
//   return(
//       <SafeAreaView>
//         <Text>duma</Text>
//       </SafeAreaView>
//   );


// }

const App = () => {
  // const ten = "Kiryu Kazuma"
  // let ten2 = " hello"
  // ten2 = "alo dmm"
  return (
    //<XoSo></XoSo>
    //<TinhToan></TinhToan>

    //  <Profile1></Profile1>

    //Login and Register
    //<Login></Login>
    //<SignUp></SignUp>


    //========Components========
    //<InputField></InputField>
    // <InputFieldIcon></InputFieldIcon>


    //=========News==========
    //<News></News>
    //<Trending></Trending> 
    //<Latest></Latest>
    // <DetailNews></DetailNews> 
    //<DetailNewsParticle></DetailNewsParticle>
    //  <ItemListNews></ItemListNews>

    //======ASM1=============
    //<Login></Login>
    //<SignUp></SignUp>
  //  <Profile1></Profile1>
    //<News></News>
    //<DetailNews></DetailNews> 

//  <UserProfile></UserProfile> 
  // <CreateNews></CreateNews>  
// <FindNews></FindNews> 
// <ChangePass></ChangePass> 
    // 
    // <NavigationContainer>
  
    // <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:false}}>
    // <Stack.Screen name='Item' component={Item}></Stack.Screen> 
    // <Stack.Screen name='Signup' component={Dangky}></Stack.Screen> 
    // <Stack.Screen name='Favor' component={Favorite}></Stack.Screen>
    
    // </Stack.Navigator>
    // </NavigationContainer>
  //  <TestTopTab></TestTopTab>
  // <TopTab></TopTab>
  //<Profile1></Profile1>
/* <ProfileSettings></ProfileSettings> */

    // <DemoGetAPi></DemoGetAPi> 

    //  <Test></Test>
     <Test2></Test2>
/* <AppContextProvider>
  <NavigationContainer>
  <AppNavigator></AppNavigator>
  </NavigationContainer>
</AppContextProvider> */



//======================================xuong th ================================================












  );
};
export default App;
