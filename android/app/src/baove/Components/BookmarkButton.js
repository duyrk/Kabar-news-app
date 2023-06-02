import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'

const BookmarkButton = () => {
    const [buttonIsActive, setbuttonIsActive] = useState(false)
    const buttonClicked = () =>{
        setbuttonIsActive(!buttonIsActive);
    }
  return (
    <View>
{ buttonIsActive === true &&  <Pressable onPress={buttonClicked}>
        <Image source={require('../images/ic_bookmark.png')}></Image>
    </Pressable>}
   { buttonIsActive === false &&  <Pressable onPress={buttonClicked}>
        <Image source={require('../images/ic_bookmarkTrans.png')}></Image>
    </Pressable>
}
    </View>
   
  )
}

export default BookmarkButton

const styles = StyleSheet.create({})