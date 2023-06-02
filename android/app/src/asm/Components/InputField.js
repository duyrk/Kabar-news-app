import { StyleSheet, Text, View, TextInput, Pressable,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../Contants/Colors'
import { Typography } from '../Contants/Typographies'

const Input = {
    Active:'active',
    Normal:'normal',
    Disabled:'disabled',
    Error:'error'
}


const InputField = (props) => {
    const {onChangeText= (text)=>{}, marginRight,isPassword,secureTextEntry=false,value,errorValue,isError,editable=true } = props
    const [inputField, setinputField] = useState(Input.Normal)
    const [inputStateType, setinputState] = useState(Input.Normal)
    const [iconPass, seticonPass] = useState(secureTextEntry)
    const [handleInput, sethandleInput] = useState(value)
  
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
    const handleIconChange = () =>{
        let tempIconPass = iconPass
        seticonPass(!tempIconPass)
    }
    useEffect(() => {
        if(isError){
            if(inputField== Input.Error && inputStateType == Input.Error){
                    return;
            }
            setinputField(Input.Error)
            setinputState(Input.Error)
        }else{
            setinputField(Input.Normal)
            setinputState(Input.Normal)
        }
    }, [isError])
    
  return (
    <View>
       <TextInput editable={editable} onFocus={Focus} onBlur={NotFocus} onChangeText={(newtext)=>{handleOnChangeText(newtext)}} value={handleInput} 
       style={[inputStateType == Input.Error ? styles.inputError : styles.input,inputStateType == Input.Disabled ? styles.inputDisabled  : styles.input] } secureTextEntry={iconPass}></TextInput>

    {inputField === Input.Active && !(handleInput.length === 0) &&<Pressable onPress={DeleteInput} style={[styles.iconOnFocus,{marginRight:marginRight}]}>
        <Image style={inputStateType == Input.Error ? {tintColor:Colors.errorDark}:{tintColor:Colors.bodyText}} source={require('../images/ic_delete.png')}></Image>
        </Pressable> } 
        {isPassword === true &&<Pressable onPress={handleIconChange} style={styles.iconOnFocus}>
        <Image style={inputStateType == Input.Error ? {tintColor:Colors.errorDark}:{tintColor:Colors.bodyText}} source={iconPass ? require('../images/ic_passEnable.png') : require('../images/ic_passDisable.png')}></Image>
        </Pressable> } 
    {inputStateType === Input.Error && <View style={styles.errorNotify}>
        <Image source={require('../images/ic_error.png')}></Image>
        <Text style={{color:Colors.errorDark, marginStart:5.33}}>{errorValue}</Text>
    </View>}
    </View>
  
  )
}

export default InputField

const styles = StyleSheet.create({
    
    input:{
        borderWidth:1,
        borderColor:'#4E4B66',
        borderRadius:6,
        marginTop:4,
        padding: 10,
   
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
    }
})