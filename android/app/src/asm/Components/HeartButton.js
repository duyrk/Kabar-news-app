import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'

const HeartButton = (props) => {
    const {styles} = props
    const [buttonIsActive, setbuttonIsActive] = useState(false)
    const buttonClicked = () =>{
        setbuttonIsActive(!buttonIsActive);
    }
  return (
    <View>
    { buttonIsActive === true &&  <Pressable style={props.styles} onPress={buttonClicked}>
        <Image source={require('../images/ic_heartIcon.png')}></Image>
    </Pressable>}
    { buttonIsActive === false &&  <Pressable style={props.styles} onPress={buttonClicked}>
        <Image source={require('../images/ic_heartTrans.png')}></Image>
    </Pressable>
}
    </View>
   
  )
}

export default HeartButton

const styles = StyleSheet.create({})