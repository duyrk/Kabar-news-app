import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'



const TinhToan = () => {
   
    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(1)
    const [num3, setnum3] = useState(3)
   

    const LuaChon = (isChoose) =>{
        let tong =  num1 + num2;
        if((tong == num3 && isChoose==true)|| (tong != num3 && isChoose == false)){
            alert("Bạn đã chọn đúng");
        }else{
            alert("Bạn đã chọn sai");
        }
        setnum1(Math.floor(Math.random()*100)+1);
        setnum2(Math.floor(Math.random()*100)+1);
        setnum3(Math.floor(Math.random()*100)+1);

    }
  return (
    <View>
      
      <Text style={styles.headerText}>BẠN GIỎI PHÉP CỘNG? </Text>

    <Text style={styles.text1}>{num1} + {num2}</Text>
        <Text style={styles.text1}>=</Text>
        <Text style={styles.text1}>{num3}</Text>
    <Pressable onPress={()=>LuaChon(true)} style={styles.buttonStyle}>
        <Text style={styles.innerButtonText}>ĐÚNG</Text>
    </Pressable>
    <Pressable onPress={()=>LuaChon(false)} style={styles.buttonStyle}>
        <Text style={styles.innerButtonText}>SAI</Text>
    </Pressable>
    </View>


  )
}

export default TinhToan
const styles = StyleSheet.create({
    headerText : {
        color:'red', 
        textAlign:'center',
        fontSize:30,
        marginVertical: 20

    },
    text1 : {
        textAlign:'center',
        fontSize:50,
        color:'blue',
        fontWeight:'bold'
    },
    buttonStyle:{
        borderWidth:1,
            padding:10,
            backgroundColor:'grey',
            marginHorizontal:20,
            marginTop: 20,
            borderRadius:15
    },
    innerButtonText:{
        color:'white',
        textAlign:'center',
        fontSize:25
    }
})