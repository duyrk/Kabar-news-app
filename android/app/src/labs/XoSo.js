import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const XoSo = () => {
    
  const [sodudoan, setsodudoan] = useState('1')
    
    const KetQua = ()=>{
        let randomNumber = Math.floor(Math.random()*100)+1;
        if(randomNumber != sodudoan){
          alert("Chúc bạn may mắn lần sau!");
        }else{
          alert("Bạn đã đoán đúng!");
        }
        
    }
  return (
    <View>
      <Text style={{color:'blue',
                    textAlign:'center',
                    fontSize:40,
                    marginVertical:20,
                    fontWeight:'bold'
    
    }}>XỔ SỐ ĐÊ !!!!</Text>
    <Text style={{  color:'green',
                    textAlign:'center',
                    fontSize: 20

}}>Nhập một số từ 1 đến 100</Text>
<TextInput onChangeText={(sodudoan) => {setsodudoan(sodudoan)}} value={sodudoan} placeholder='Nhập số dự đoán' style={{
                    borderWidth:1,
                    margin:10,
                    padding:10

}}></TextInput>
        <Pressable onPress={KetQua} style={{
                    backgroundColor:'red',
                    margin:10,
                    padding:10
        }}>
            <Text style={{
                    textAlign:'center',
                    color:'white'
            }}>Dự đoán</Text>
        </Pressable>
    </View>
  )
}

export default XoSo