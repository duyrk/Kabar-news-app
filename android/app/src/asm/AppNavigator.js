import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from './util/AppContext';
import Login from './Login';
import SignUp from './SignUp';
import Explore from './Explore';
import News from './News';
import Bookmark from './Bookmark';
import Profile1 from './Profile1';
import { Colors } from './Contants/Colors';
import BottomNavIcon from './Components/BottomNavIcon';
import BottomNavIconNotActive from './Components/BottomNavIconNotActive';
import NavigatorScreen from './NavigatorScreen';
import DetailNews from './DetailNews';
import UserProfile from './UserProfile';
import ProfileSettings from './ProfileSettings';
import CreateNews from './CreateNews';
import MyWeb from './MyWeb';
import FindNews from './FindNews';
import ChangePasswordOption from './ChangePasswordOption';
import ChangePass from './ChangePass';

const Stack = createNativeStackNavigator();
//login, register
const HomeTab = () =>{
    return(
<Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {


                if (route.name === 'Home') {
                    return focused ? <BottomNavIcon type="Home" /> : <BottomNavIconNotActive type="Home" />
                } else if (route.name === 'Explore') {
                    return focused ? <BottomNavIcon type="Explore" /> : <BottomNavIconNotActive type="Explore" />
                } else if (route.name === 'Bookmark') {
                    return focused ? <BottomNavIcon type="Bookmark" /> : <BottomNavIconNotActive type="Bookmark" />
                } else if (route.name === 'Profile'){
                    return focused ? <BottomNavIcon type="Profile" /> : <BottomNavIconNotActive type="Profile" />
                }

                
            },
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.bodyText,
            headerShown:false,
           
        })} >
            <Tab.Screen name="Home" component={News} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Bookmark" component={Bookmark} />
            <Tab.Screen name="Profile" component={UserProfile} />
        </Tab.Navigator>

    )
}
const Users = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />        
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
//bottomTab
const Home = () => {
    return (
        <Stack.Navigator initialRouteName='HomeTab' screenOptions={{headerShown:false}}>
        
        <Stack.Screen name='HomeTab' component={HomeTab}></Stack.Screen>
        <Stack.Screen name='DetailNews' component={DetailNews}></Stack.Screen> 
        <Stack.Screen name='ProfileSettings' component={ProfileSettings}></Stack.Screen> 
        <Stack.Screen name='MyWeb' component={MyWeb}></Stack.Screen> 
        <Stack.Screen name='CreateNews' component={CreateNews}></Stack.Screen> 
        <Stack.Screen name='EditProfile' component={Profile1}></Stack.Screen> 
        <Stack.Screen name='FindNews' component={FindNews}></Stack.Screen> 
        <Stack.Screen name='ChangePasswordOption' component={ChangePasswordOption}></Stack.Screen> 
        <Stack.Screen name='ChangePass' component={ChangePass}></Stack.Screen>
    </Stack.Navigator>
        
    )


}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    console.log(isLogin)
    return (
        
        <>{isLogin ? <Home></Home> : <Users></Users>}</>
    )
}

export default AppNavigator