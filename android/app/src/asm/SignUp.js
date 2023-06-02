import { SafeAreaView, StyleSheet, Text, TextInput, View, Pressable,Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import InputField from './Components/InputField';
import Buttons from './Components/Buttons';
import AxiosIntance from './util/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const {navigation} = props;
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const Register = async () =>{
        console.log(username)
        console.log(password)
        try {
          const responseRegister = await AxiosIntance().post("/users/register",{email: username, password:password});
          console.log(responseRegister)
          if(responseRegister.error == false){
           navigation.navigate('Login');
           ToastAndroid.show('Đăng ký thành công',ToastAndroid.SHORT);
          }else{
           ToastAndroid.show('Đăng ký thất bại',ToastAndroid.SHORT);
          }
        } catch (error) {
          ToastAndroid.show('Đăng ký thất bại',ToastAndroid.SHORT);
        }
     
  }


  const goLogin = () =>{
    navigation.navigate('Login');
  }
  // const goProfile = () =>{
  //   navigation.navigate('Profile');
  // }
  return (
<SafeAreaView style={styles.container}>
     <View style={styles.headerStyles}>

        <View style={styles.headerTextContainer}>
               {/* <Text style={[styles.headerText,{color:'#050505'}]}>Hello</Text> */}
               <Text style={[styles.headerText,{color: '#1877F2'}]}>Hello!</Text>
        </View>

        <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Signup to get started</Text>
        </View>      
    </View>
    <View style={styles.inputContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>Username</Text>
      <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
    </View>
    <InputField value='' onChangeText={(username) =>{setusername(username)}}></InputField>
    </View>
    <View style={styles.inputContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>Password</Text>
      <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
    </View>
    <InputField value='' onChangeText={(password) =>{setpassword(password)}}></InputField>
    </View>
   <View style={styles.subFeature}>
    <View style={styles.rememberMeStyle}>
  {/* <BouncyCheckbox style={styles.checkBoxStyle}
                  iconStyle={{borderColor:'red'}}
                 fillColor={'#1877F2'}></BouncyCheckbox> */}
    <CheckBox
 
    tintColors={{ true: 'blue' }}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  ></CheckBox>    
    <Text style={[styles.labelText,{marginTop:4}]}>
        Remember me
      </Text>
    </View>
    {/* <Text style={[styles.labelText,{marginTop:4,color:'#5890FF'}]}>Forgot the password ?</Text> */}
   </View>
   <Buttons onPress={Register} value="Sign Up" type="primary" paddingVertical={13} paddingHorizontal={24} marginTop={16}></Buttons>
    <Text style={{marginTop:16,alignSelf:'center'}}>or continue with</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:16}}>
      <Pressable style={styles.socialButton}>
        <Image style={styles.imageSocial} source={require('../asm/images/ic_fb.png')}></Image>
        <Text style={styles.socialText}>Facebook</Text>
      </Pressable>
      <Pressable style={styles.socialButton}>
        <Image style={styles.imageSocial} source={require('../asm/images/ic_google.png')}></Image>
        <Text style={styles.socialText}>Google</Text>
      </Pressable>
    </View>
    <View style={{flexDirection:'row',marginTop:16,justifyContent:'center'}}>
      <Text>Already have an account ?</Text>
      <Pressable onPress={goLogin}>
      <Text style={[styles.socialText,{color:'#1877F2'}]}> Login</Text>
      </Pressable>
      
    </View>
</SafeAreaView>
  
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
   flex: 1,
    paddingStart:25,
    paddingEnd:25,
    flexDirection: 'column',
backgroundColor:'#ffffff'
  },
  headerStyles:{
   height:155,
   marginTop:24
  },
  headerTextContainer:{

   
   
  },
  headerText:{
    fontWeight:'700',
    fontSize: 48,
    lineHeight: 72,
    letterSpacing:0.12,
    fontFamily:'Poppins'
  },
  welcomeTextContainer:{
    width:222,
    height:60,
    marginTop:4,
  },
  welcomeText:{
  fontFamily:'Poppins',
    fontSize:20,
    fontWeight: '400',
    lineHeight:30,
    letterSpacing:0.12
    
  },
  inputContainer:{
    marginTop:16
  },
  labelContainer:{
      flexDirection:'row'
  },
  labelText:{
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:14,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
 input:{
  borderWidth:1,
  borderColor:'#4E4B66',
  borderRadius:6,
  marginTop:4,
  padding: 10
 },
 subFeature:{
  marginTop:8,
  flexDirection:'row',
  justifyContent:'space-between'
 },
 rememberMeStyle:{
  flexDirection:'row',
 },
 buttonStyle:{
  marginTop:16,
backgroundColor:'#1877F2',
paddingVertical:13,
paddingHorizontal:24,
borderRadius:6
 },
innerButtonText:{
  textAlign:'center',
  color:'white',
  fontWeight:'600',
  fontSize:16,
  lineHeight:24,
  letterSpacing:0.12
},
imageSocial:{
width:21,
height:21,
marginEnd:10
},
socialButton:{
flexDirection:'row',
backgroundColor:'#EEF1F4',
width:154,
paddingVertical:12,
paddingRight:24,
paddingLeft:16,
justifyContent:'center',
borderRadius:6
},
socialText:{
fontWeight:'600',
fontSize:16,
lineHeight:20,
letterSpacing:0.12,
color: '#667080'
},
goSignUp:{

}
})