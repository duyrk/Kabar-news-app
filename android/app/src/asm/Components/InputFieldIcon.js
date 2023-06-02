import { StyleSheet, Text, View, TextInput, Pressable,Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Contants/Colors'
import { Typography } from '../Contants/Typographies'

const Input = {
    Active:'active',
    Normal:'normal',
    Disabled:'disabled',
    Error:'error'
}
const inputState = (inputField)=>{
    console.log(inputField)
    return inputField;
}

const InputFieldIcon = (props) => {
    const {onChangeText= (text)=>{},value,onPress1} = props
    const [inputField, setinputField] = useState(Input.Normal)
    const [inputStateType, setinputState] = useState(Input.Normal)  
    const [handleInput, sethandleInput] = useState('')


    const handleOnChangeText = (newtext)=>{
        sethandleInput(newtext)
        onChangeText(newtext) //chuyền ngược lại để nhận dữ liệu
        
        
    }
   const Focus = () =>{
    
     if(inputField == Input.Active){
            return;
    }
        setinputField(Input.Active)
        console.log("focus")
        
    }
   
    const NotFocus = ()=>{
        if(inputField == Input.Normal){
            return;
    }
        setinputField(Input.Normal)
        console.log("notfocus")
    }
    const DeleteInput = ()=>{
        sethandleInput('');
        handleOnChangeText('')
    }
    const CheckInput = ()=>{
        if(handleInput !=''){
            return true;
        }
        return false;
    }
  return (
    <View >
          
            <Image style={styles.searchIcon} source={require('../images/ic_search.png')}></Image>
     
       <TextInput placeholder='Search' onFocus={Focus} onBlur={NotFocus} onChangeText={(newtext)=>{handleOnChangeText(newtext)}} value={handleInput} 
       style={[inputStateType == Input.Error ? styles.inputError : styles.input,inputStateType == Input.Disabled ? styles.inputDisabled  : styles.input]} ></TextInput>

    {inputField === Input.Active && handleInput !=="" && <Pressable onPress={DeleteInput} style={styles.iconOnFocus}>
        
        <Image style={inputStateType == Input.Error ? {tintColor:Colors.errorDark}:{tintColor:Colors.bodyText}} source={require('../images/ic_delete.png')}></Image>
        </Pressable> } 

    {inputStateType === Input.Error && <View style={styles.errorNotify}>
        <Image source={require('../images/ic_error.png')}></Image>
        <Text style={{color:Colors.errorDark, marginStart:5.33}}>Invalid Username</Text>
    </View>}
   
    </View>
  
  )
}

export default InputFieldIcon

const styles = StyleSheet.create({
    
    input:{
        borderWidth:1,
        borderColor:'#4E4B66',
        borderRadius:6,
        marginTop:4,
        padding: 10,
        paddingStart:50
    },
    inputError:{
        borderWidth:1,
        borderColor:'#4E4B66',
        borderRadius:6,
        marginTop:4,
        padding: 10,
        backgroundColor:Colors.errorLight,
        borderColor: Colors.errorDark
    },
    inputDisabled:{
        borderWidth:1,
        borderColor:'#4E4B66',
        borderRadius:6,
        marginTop:4,
        padding: 10,
        borderColor:'#667080',
        backgroundColor:Colors.disabledInput,
        color:Colors.bodyText
    }
    ,
    iconOnFocus:{
        position:'absolute',
        top:16,
        right:12,
        
    },
    errorNotify:{
        marginTop:7.83,
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon:{
        position:'absolute',
        top:16,
        left:12,
    }
})