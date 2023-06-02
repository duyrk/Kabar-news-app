import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Typography } from '../Contants/Typographies'
import { Colors } from '../Contants/Colors'
const ButtonType = {
    Primary: 'primary',
    Secondary:'secondary',
    Outline:'outline'
}
const Buttons = (props) => {
    const [ButtonState, setButtonState] = useState()
    const {type, value, marginTop, paddingVertical, paddingHorizontal, onPress,isDisabled=false} = props
    switch(type){
        case 'primary':{
            if(ButtonState==ButtonType.Primary){
                break;
            }
            setButtonState(ButtonType.Primary)
            break;
        }
        case 'secondary':{
            if(ButtonState==ButtonType.Secondary){
                break;
            }
            setButtonState(ButtonType.Secondary)
            break;
        }
        case 'outline':{
            if(ButtonState==ButtonType.Outline){
                break;
            }
            setButtonState(ButtonType.Outline)
            break;
        }
    }
  return (
    <View style={{flex:0}}>
       {ButtonState === ButtonType.Primary && <Pressable onPress={onPress} style={[styles.buttonPrimaryStyle,{marginTop:props.marginTop, paddingHorizontal: props.paddingHorizontal, paddingVertical:props.paddingVertical}]}>
        <Text style={[styles.innerButtonText,Typography.linkMedium]}>{value}</Text>
        </Pressable> }

        {ButtonState === ButtonType.Secondary && <Pressable  onPress={onPress} disabled={isDisabled} style={[styles.buttonSecondaryStyle,{marginTop:props.marginTop}]}>
        <Text style={[styles.innerButtonTextSecondary,Typography.linkMedium]}>{value}</Text>
        </Pressable> }
        
        {ButtonState === ButtonType.Outline && <Pressable  style={[styles.buttonOutlineStyle,{marginTop:props.marginTop}]}>
        <Text style={[styles.innerButtonTextOutline,Typography.linkMedium]}>{value}</Text>
        </Pressable> }
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonPrimaryStyle:{      
      backgroundColor:'#40BFFF',
      paddingVertical:13,
      paddingHorizontal:24,
      borderRadius:6
       },
      innerButtonText:{
        textAlign:'center',
        color:'white',
        
      },
      buttonSecondaryStyle:{
        backgroundColor:'#EEF1F4',
      paddingVertical:13,
      paddingHorizontal:24,
      borderRadius:6
      },
      innerButtonTextSecondary:{
        textAlign:'center',
        color: Colors.buttonText,
      },
      buttonOutlineStyle:{
        borderWidth:1,
       borderColor: Colors.primary,
      paddingVertical:13,
      paddingHorizontal:24,
      borderRadius:6
      },
      innerButtonTextOutline:{
        textAlign:'center',
        color: Colors.primary,
      }
})