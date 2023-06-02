import { StyleSheet, Text, View, FlatList, Image, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import { Colors } from './Contants/Colors'
import { Typography } from './Contants/Typographies'
import { Data } from './Contants/Data'
import InputFieldIcon from './Components/InputFieldIcon'
import Trending from './Trending'
import Latest from './Lastest'
import AxiosIntance from './util/AxiosIntance'
import { AppContext } from './util/AppContext'

const News = (props) => {
  const {isReloading,setisReloading} = useContext(AppContext)
  const {navigation} = props;
  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const loadNewsData = async () =>{
    try {
      const responeNewsData = await AxiosIntance().get('/articles')
      if(responeNewsData.error==false){
        setdata(responeNewsData.data)
        setisLoading(false)
      }else{      console.log("fail1")}
    } catch (error) {
      console.log("fail")

    }
  }
  useEffect(() => {
    loadNewsData();
  
  }, [isReloading])
 
  
  const goDetail = (item) =>{
    navigation.navigate('DetailNews',{item: item});
  }
  const goFindNews = () =>{
    navigation.navigate('FindNews')
  }
  return (
   
      
        isLoading ==true ? 
        <View style={styles.LoadingScreen}>         
          <ActivityIndicator size='large' color={Colors.primary}></ActivityIndicator>
        </View>
        :
        <View>
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../asm/images/logo.png')}></Image>
          <View style={styles.bellContainer}>
          <Image source={require('../asm/images/ic_bell.png')}></Image>
          </View>
      </View>
      <Pressable onPress={goFindNews}>
      <View style={styles.searchBar}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
           <Image source={require('./images/ic_search.png')}></Image>
           <Text style={{marginLeft:10}}>Search...</Text>
        </View>
       <Image source={require('./images/ic_configure.png')}></Image>
      </View>
      </Pressable>
      
    
      
        </View>
     
      <ScrollView  style={{marginTop:16, paddingHorizontal:25}}>
  
        <Trending onPress1={goDetail} data1={data[0]}></Trending>
        <Latest onPress1={goDetail} data1={data} ></Latest>
    </ScrollView>
        </View>
    
      
   
    
  
  )
}

export default News

const styles = StyleSheet.create({
    container:{
     
        marginTop:24,
        marginStart:25,
        marginEnd:25
    },
    header:{
        height:56,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    bellContainer:{
 
        width:32,
        height:32,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:6,
       
    },
    labelFrag:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    label:{
     
    },
    LoadingScreen:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',

    },
    searchBar:{
     
      borderWidth:1,
      height:45,
      borderRadius:6,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:14,
      paddingHorizontal:12,
      alignItems:'center'
    }
})