import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Typography } from './Contants/Typographies'

const Item = (props) => {
    const {data}= props
  return (
    <View style={{borderWidth:2,width:150}}>
        <Image source={require('./images/product.png')}>

        </Image>
    {/* //  <Text style={Typography.linkSmall}>{data.name}</Text>
      <Text style={{color:'#40BFFF',marginTop:16}}>{data.price}</Text> */}
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})