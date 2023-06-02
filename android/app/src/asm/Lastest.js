import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'
import { Data } from './Contants/Data'
import ItemListNews from './ItemListNews'
import AxiosIntance from './util/AxiosIntance'

const Latest = (props) => {
  const {onPress1,data1} = props
  // const [data, setdata] = useState([])
  // const [isLoading, setisLoading] = useState()
  // const loadNewsData = async () =>{
  //   try {
  //     const responeNewsData = await AxiosIntance().get('/articles')
  //     if(responeNewsData.error==false){
  //       setdata(responeNewsData.data)
        
  //     }else{      console.log("fail1")}
  //   } catch (error) {
  //     console.log("fail")

  //   }
  // }
  // useEffect(() => {
  //   loadNewsData();
  
  
  // }, [])

  return (
    <View style={styles.container}>
  

    <View style={styles.labelFrag}>
    <Text style={[Typography.linkMedium,{color:'#000000'}]}>Latest</Text>
    <Pressable onPress={onPress1}>
    <Text style={[Typography.textSmall,{color:Colors.bodyText}]}>See all</Text>
    </Pressable>
    </View>
           {/* <FlatList
        data={Data}
        renderItem={({item}) => <ItemListNews data={item}></ItemListNews>}
        keyExtractor={item => item._id}
      /> */}
   
      {
        data1.map((item) => <ItemListNews key={item._id} data={item} onPress1={onPress1} ></ItemListNews>) 
      }
    </View>
  )
}

export default Latest

const styles = StyleSheet.create({
    
 
    labelFrag:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    label:{
     
    }
})