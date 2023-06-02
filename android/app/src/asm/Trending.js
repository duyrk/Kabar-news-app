import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'
import { Data } from './Contants/Data'
import ItemListNews from './ItemListNews'
import AxiosIntance from './util/AxiosIntance'
const Trending = (props) => {
    const {onPress1,data1} = props
    // const [data, setdata] = useState([])
    // const loadNewsData = async () =>{
    //     try {
    //       const responeNewsData = await AxiosIntance().get('/articles')
    //       if(responeNewsData.error==false){
    //         setdata(responeNewsData.data)
    //         console.log(data)

    //       }else{      console.log("fail1")}
    //     } catch (error) {
    //       console.log("failtrending")
    
    //     }
    //   }
    //   useEffect(() => {
    //     // loadNewsData();
      
    //   }, [])
  return (
    <View >
  

    <View style={styles.labelFrag}>
    <Text style={[Typography.linkMedium,{color:'#000000'}]}>Trending</Text>
    <Text style={[Typography.textSmall,{color:Colors.bodyText}]}>See all</Text>
    </View>
    <Pressable onPress={()=>{onPress1(data1)}}>
    <View style={styles.bannerContainer}>
        <Image style={[styles.bannerImage,Typography.textXSmall]} source={{uri: data1.image}}></Image>
     <Text style={styles.nationText}>Việt Nam</Text>
     <Text style={[styles.titleText,Typography.textMedium]}>{data1.title}</Text>
     <View style={styles.creditsContainer}>
        <View  style={styles.credits}>
        <Image style={{marginEnd:4,width:20,height:20}} source={require('../asm/images/ic_authorLogo.png')}></Image>
        <Text>VnExpress</Text>
        </View>
        
        <Pressable>
        <Image source={require('../asm/images/ic_3dotscredit.png')}></Image>
        </Pressable>
       
        </View>
      </View>
    </Pressable>
  
     
      </View>
    
  )
}

export default Trending

const styles = StyleSheet.create({
    
    labelFrag:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bannerContainer:{
        marginTop:24,
    
    },
    bannerImage:{
        maxWidth:'100%',
        height: 200,
        borderRadius:6
    },
    nationText:{
        color: Colors.bodyText,
        marginTop:8
    },
    titleText:{
        marginTop:4,
        color:'#000000'
    },
    creditsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
 
    },
    credits:{
        margin:4,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between'
    }
     
    
})