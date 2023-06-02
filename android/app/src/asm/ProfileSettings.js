import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, { useContext } from 'react'
import { Typography } from './Contants/Typographies'
import AxiosIntance from './util/AxiosIntance'
import { AppContext } from './util/AppContext'

const ProfileSettings = (props) => {
  const {navigation} = props
  const {setisLogin} = useContext(AppContext)
  
  const back = () =>{
    navigation.goBack();
  }
  const ChangePass = () =>{
    navigation.navigate('ChangePasswordOption')
  }
  const logout = async () =>{
    try {
      const onLogout = await AxiosIntance().get('auth/logout')
      if(onLogout.error == false){


            setisLogin(false)
            await AsyncStorage.setItem('token',null);
          
      }else{
        console.log('Đăng xuất thất bại')
      }
    } catch (error) {
      console.log('Đăng xuất thất bại')
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.topParticle}>
       <Pressable style={styles.backButton} onPress={back}>
           <Image source={require('../asm/images/ic_back.png')}></Image>
       </Pressable>
     <Text style={styles.headerText}>Settings</Text>
     </View>
     <View style={{marginTop:20.22}}>
     <Pressable style={styles.settingcard}>
     <View style={styles.settingcardinner}>
      <Image source={require('./images/ic_bell.png')}></Image>
      <Text style={[Typography.textMedium,{marginLeft:8,color:'#000000'}]}>Notification</Text>
     </View>
     <Image source={require('./images/ic_expand.png')}></Image>
     </Pressable>

     <Pressable style={[styles.settingcard,{marginTop:48}]} onPress={ChangePass}>
     <View style={styles.settingcardinner}>
      <Image source={require('./images/ic_security.png')}></Image>
      <Text style={[Typography.textMedium,{marginLeft:8,color:'#000000'}]}>Security</Text>
     </View>
     <Image source={require('./images/ic_expand.png')}></Image>
     </Pressable>

     <Pressable style={[styles.settingcard,{marginTop:48}]}>
     <View style={styles.settingcardinner}>
      <Image source={require('./images/ic_help.png')}></Image>
      <Text style={[Typography.textMedium,{marginLeft:8,color:'#000000'}]}>Help</Text>
     </View>
     <Image source={require('./images/ic_expand.png')}></Image>
     </Pressable>

     <Pressable style={[styles.settingcard,{marginTop:48}]}>
     <View style={styles.settingcardinner}>
      <Image source={require('./images/ic_darkmode.png')}></Image>
      <Text style={[Typography.textMedium,{marginLeft:8,color:'#000000'}]}>Dark Mode</Text>
     </View>
     <Image source={require('./images/ic_expand.png')}></Image>
     </Pressable>
     
     <Pressable style={[styles.settingcard,{marginTop:48}]} onPress={logout}>
     <View style={styles.settingcardinner}>
      <Image source={require('./images/ic_logout.png')}></Image>
      <Text style={[Typography.textMedium,{marginLeft:8,color:'#000000'}]}>Logout</Text>
     </View>
     
     </Pressable>
     </View>
     
   
    </View>
  )
}

export default ProfileSettings

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:24,
        marginStart:25,
        marginEnd:25
    },
    topParticle:{
      flexDirection :'row',
      alignItems:'center',
      
      },
      headerText:{
        marginLeft:103,
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        color: '#000000'
    },
    settingcard:{
      flexDirection:'row',
      justifyContent:'space-between'

    },
    settingcardinner:{
      flexDirection:'row',
      alignItems:'center'
    }
})