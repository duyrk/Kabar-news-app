import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Contants/Colors'

const Type = {
    Home:'Home',
    Explore:'Explore',
    Bookmark:'Bookmark',
    Profile:'Profile'
}
const BottomNavIcon = (props) => {
    const {type} = props
 const [buttonType, setbuttonType] = useState()
 switch(type){
    case 'Home':{
        if(buttonType==Type.Home){
            break;
        }
        setbuttonType(Type.Home)
        break;
    }
    case 'Explore':{
        if(buttonType==Type.Explore){
            break;
        }
        setbuttonType(Type.Explore)
        break;
    }
    case 'Bookmark':{
        if(buttonType==Type.Bookmark){
            break;
        }
        setbuttonType(Type.Bookmark)
        break;
    }
    case 'Profile':{
        if(buttonType==Type.Profile){
            break;
        }
        setbuttonType(Type.Profile)
        break;
    }

 }
  return (
    <View>
    { buttonType === Type.Home &&  
        <Image  style={{width:24,height:24,tintColor:Colors.primary}} source={require('../images/ic_home3.png')}></Image>
    }
    { buttonType === Type.Explore &&  
        <Image  style={{width:24,height:24,tintColor:Colors.primary}} source={require('../images/ic_explore.png')}></Image>
   }
    { buttonType === Type.Bookmark && 
        <Image  style={{width:24,height:24,tintColor:Colors.primary}} source={require('../images/ic_bookmarknav.png')}></Image>
  }
    { buttonType === Type.Profile &&  
        <Image  style={{width:24,height:24,tintColor:Colors.primary}} source={require('../images/ic_profile.png')}></Image>
    }
    </View>
   
  )
}

export default BottomNavIcon

const styles = StyleSheet.create({})