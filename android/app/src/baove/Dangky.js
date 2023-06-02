import { StyleSheet, Text, View,Image, ToastAndroid, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput,Button} from 'react-native'
import React, { useState } from 'react'
import { Typography } from './Contants/Typographies'
import InputFieldIcon from './Components/InputFieldIcon'
import Buttons from './Components/Buttons'
Typography

const Dangky = (props) => {
    const {navigation} = props
    const [fullName, setfullName] = useState('')
    const [email, setemail] = useState('')
    const [passWord, setpassWord] = useState('')
    const [passWordAgain, setpassWordAgain] = useState('')
const validate = ()=>{

    console.log(fullName)
    console.log(email)
    console.log(passWord)
    console.log(passWordAgain)
    let error = false
    if(fullName.length==0){
        ToastAndroid.show('Tên không được để trống',ToastAndroid.SHORT)
        error = true
    }
    let validRegex=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(email.length==0){

        ToastAndroid.show('Email không được để trống',ToastAndroid.SHORT)
        
    }
    else if(!email.match(validRegex)){
        ToastAndroid.show("Email không đúng định dạng",ToastAndroid.SHORT)
        error = true
    }

    if(passWord.length==0){
        ToastAndroid.show("Password không được để trống",ToastAndroid.SHORT)

        error=true
    }
    if(passWordAgain.length==0){
        
        ToastAndroid.show("Password nhập lại không được để trống",ToastAndroid.SHORT)

        error=true
    }else if(passWordAgain!==passWord){
      
        ToastAndroid.show("Password nhập lại không trùng khớp với password",ToastAndroid.SHORT)

        error=true
    }

    if(error==false){
        ToastAndroid.show('Thành công',ToastAndroid.SHORT)
        navigation.navigate('Favor')
    }
}
  return (
    <KeyboardAvoidingView  style={styles.container}
    behavior={'position'}
  enabled>

    <View >
      <View style={styles.welcomeText}>
        <Image source={require('./images/Icon.png')}></Image>
        <Text style={[{marginTop:16},Typography.linkLarge]}>Let's get started</Text>
       <Text>Create an new account</Text> 
      </View>
        <InputFieldIcon onChangeText={setfullName} placeHolder="Full name" image={require('./images/User.png')}></InputFieldIcon>
        <InputFieldIcon onChangeText={setemail} placeHolder="Your Email" image={require('./images/User.png')}></InputFieldIcon>
        <InputFieldIcon isPassword={true} onChangeText={setpassWord} placeHolder="Password" image={require('./images/User.png')}></InputFieldIcon>
        <InputFieldIcon isPassword={true}  onChangeText={setpassWordAgain} placeHolder="Password Again" image={require('./images/User.png')}></InputFieldIcon>
        <InputFieldIcon isPassword={true}  onChangeText={setpassWordAgain} placeHolder="Password Again" image={require('./images/User.png')}></InputFieldIcon>
        <Buttons onPress={validate} type="primary" value="Sign Up" paddingVertical={16} marginTop={16} ></Buttons>
        </View>
    </KeyboardAvoidingView>
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <View style={styles.inner}>
    //       <Text style={styles.header}>Header</Text>
    //       <TextInput placeholder="Username" style={styles.textInput} />
    //       <View style={styles.btnContainer}>
    //         <Button title="Submit" onPress={() => null} />
    //       </View>
    //     </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}

export default Dangky

const styles = StyleSheet.create({
    container:{
         flex:1,
            paddingHorizontal:16,
            backgroundColor:'red'
    },
    welcomeText:{
        justifyContent:'center',
        alignItems:'center',
      
        marginTop:111
    }
})
