import { StyleSheet, Text, View,Image, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InputField from './Components/InputField'
import Buttons from './Components/Buttons'
import { AppContext } from './util/AppContext'
import AxiosIntance from './util/AxiosIntance'

const ChangePass = () => {
    const {userPassword} = useContext(AppContext)

    const [handleUserPass, sethandleUserPass] = useState('')
    const [currentPass, setcurrentPass] = useState('')
    const [newPass, setnewPass] = useState('')
    const [newPassAgain, setnewPassAgain] = useState('')
    const [buttonType, setbuttonType] = useState('secondary')

    const [handcurrentPassError, sethandcurrentPassError] = useState(false)
    const [handNewPassError, sethandNewPassError] = useState(false)
    const [handNewPass2Error, sethandNewPass2Error] = useState(false)
    useEffect(() => {
    sethandleUserPass(userPassword)
    
      
    }, [])
    
    useEffect(() => {
    //   console.log(currentPass)
    //   console.log(newPass)
    //   console.log(newPassAgain)
      Validate()
    }, [currentPass,newPass,newPassAgain,handcurrentPassError,handNewPassError,handNewPass2Error])
    const ChangePass= ()=>{

        try {
            const ChangePassRespone = AxiosIntance().post('/users/change-password',{password: newPass})
            if(ChangePassRespone.error==false){
                ToastAndroid.show('Đổi mật khẩu thành công!',ToastAndroid.SHORT)
            }else{
                ToastAndroid.show('Đổi mật khẩu thành công!',ToastAndroid.SHORT)
            }
        } catch (error) {
            ToastAndroid.show('Đổi mật khẩu thành công!',ToastAndroid.SHORT)
        }
    }
    const Validate = ()=>{
        if(currentPass.length==0){
            sethandcurrentPassError(false)
        }else if(currentPass!==userPassword){
            sethandcurrentPassError(true)
        }else{
            sethandcurrentPassError(false)
        }
       
        if(newPass.length==0){
            sethandNewPassError(false)
        }else if(newPass==currentPass){
            sethandNewPassError(true)
        }else{
            sethandNewPassError(false)
        }

        if(newPassAgain.length==0){
            sethandNewPass2Error(false)
        }else if(newPassAgain!==newPass){
            sethandNewPass2Error(true)
        }else{
            sethandNewPass2Error(false)
        }

        if(currentPass.length!==0 && newPass.length!==0 && newPassAgain.length!==0 && handcurrentPassError==false && handNewPassError==false && handNewPass2Error==false){
                setbuttonType('primary')
        }else{
            setbuttonType('secondary')
        }
        console.log('============')
        console.log("current pass: "+handleUserPass)
        console.log("input current:"+currentPass)
        console.log("current error:"+handNewPass2Error)
    }
  return (
    <View style={styles.container}>
        <Image style={{alignSelf:'center'}} source={require('./images/password.png')}></Image>
        <View>
        <View style={styles.labelContainer}>
      <Text style={styles.labelText}>Current Password</Text>
      <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
    </View>
    <InputField isError={handcurrentPassError} value='' errorValue="Mật khẩu không trùng với mật khẩu hiện tại" onChangeText={(Text) =>{setcurrentPass(Text)}}></InputField>
    </View>
    <View>
        <View style={styles.labelContainer}>
      <Text style={styles.labelText}>New Password</Text>
      <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
    </View>
    <InputField isError={handNewPassError} value='' errorValue="Mật khẩu bị trùng với mật khẩu hiện tại" onChangeText={(Text) =>{setnewPass(Text)}}></InputField>
    </View>
    <View>
        <View style={styles.labelContainer}>
      <Text style={styles.labelText}>Type New Password Again</Text>
      <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
    </View>
    <InputField isError={handNewPass2Error} value='' errorValue="Mật khẩu không trùng khớp với mật khẩu mới" onChangeText={(Text) =>{setnewPassAgain(Text)}}></InputField>
    </View>
    <Buttons  onPress={ChangePass} value='Change Password' isDisabled={buttonType == 'secondary' ? true : false} type={buttonType} marginTop={20} paddingVertical={13}></Buttons>
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
    container:{

        paddingTop:24,
        paddingHorizontal:25,
       
      
    },
    inputContainer:{
        marginTop:16
      },
      labelContainer:{
          flexDirection:'row',
          marginTop:30
      },
      labelText:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:14,
        lineHeight: 21,
        letterSpacing: 0.12,
      },
})