import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Contants/Colors'

const Type = {
    Home:'Home',
    Explore:'Explore',
    Bookmark:'Bookmark',
    Profile:'Profile'
}
const BottomNavIconNotActive = (props) => {
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
        <Image  style={{width:24,height:24,tintColor:Colors.bodyText}} source={require('../images/ic_homeTrans.png')}></Image>
   }
    { buttonType === Type.Explore &&  
        <Image  style={{width:24,height:24,tintColor:Colors.bodyText}} source={require('../images/ic_exploreTrans.png')}></Image>
   }
    { buttonType === Type.Bookmark &&  
        <Image  style={{width:24,height:24,tintColor:Colors.bodyText}} source={require('../images/ic_bookmarkTrans.png')}></Image>
   }
    { buttonType === Type.Profile &&  
        <Image  style={{width:24,height:24,tintColor:Colors.bodyText}} source={require('../images/ic_profileTrans.png')}></Image>
    }
    </View>
   
  )
}

export default BottomNavIconNotActive

const styles = StyleSheet.create({})