import { StyleSheet, Text, View,Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import { Typography } from './Contants/Typographies'
import Item from './Item'
const data=
[
   { 
    image:"",
    name:"Nike Air",
    price:"$499"

   }


]
const Favorite = (props) => {
    const {navigation} = props
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',borderBottomWidth:2, padding:16,borderBottomColor:'#EBF0FF'}}>
        <Pressable onPress={()=>{navigation.goBack()}}>
        <Image source={require('./images/Left.png')}></Image>
        </Pressable>
      <Text style={[Typography.linkLarge,{marginStart:40}]}>Favorite</Text>
      </View>
      <FlatList
      data={data}
      renderItem={({item}) => <Item data={item}></Item>}

        >
      </FlatList>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
    container:{
       
    }
})