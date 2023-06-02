import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Typography } from './Contants/Typographies';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 const goDetail = () =>{

 }
const ItemProfile = (props) => {
    const {data,onPress1} = props;
  return (
  <Pressable onPress={()=> onPress1(data)}>
<View style={styles.newsContainer}>
      <Image style={styles.image} source={{uri: data.articles.urlToImage}}>
      </Image>
      <View style={styles.newsLabelContainer}>
        <Text style={Typography.textXSmall}>{data.userID}</Text>
        <Text style={[Typography.textMedium,{color:'#000000'}]}>{data.articles.title}</Text>
        <Text style={Typography.textXSmall}>{data.number}</Text>
        <Text style={[Typography.textMedium,{color:'#000000'}]}>{data.address}</Text>

     
      </View>
    </View>
  </Pressable>
 
  
   
  )
}

export default ItemProfile

const styles = StyleSheet.create({
    image:{
            width:96,
            height:96,
            borderRadius:10,
            margin:10
    },
    newsContainer:{
        flexDirection:'row'
    },
    newsLabelContainer:{
      marginTop:8
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