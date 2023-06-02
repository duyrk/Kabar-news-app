import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import ItemListNews from './ItemListNews'
import { Data } from './Contants/Data'
import Buttons from './Components/Buttons'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'

const DetailNewsParticle = (props) => {
  const {item} = props
  return (
   <View>
    <View style={styles.header}>     
      <View style={styles.authorInfo}>
      <Image style={styles.logoNewsAuthor} source={require('./images/ic_authorLogo.png')}></Image>
      <View style={styles.authorNameInfo}>
      <Text style={Typography.linkMedium}>VnExpress</Text>
      <Text style={Typography.textSmall}>14m ago</Text>
      </View>
      </View>
      <Buttons type='primary' value='Following' paddingVertical={5} paddingHorizontal={12}></Buttons>
    </View>
    <Image style={[styles.bannerImage,Typography.textXSmall]} source={{uri : item.image}}></Image>
    <View style={styles.tittleContainer}>
      <Text style={Typography.textSmall}>
        Việt Nam
      </Text>
      <Text style={[{color:'#000000'},Typography.displaySmall]}>{item.title}</Text>
    </View>
    <Text style={[Typography.textMedium,styles.content]}>
{item.content}
    </Text>
   </View>
  )
}

export default DetailNewsParticle

const styles = StyleSheet.create({
header:{
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'space-between'
}
  ,
logoNewsAuthor:{
  width:40,
  height:40
},
authorInfo:{
  flexDirection:'row',
  alignItems:'center'
},
bannerImage:{
  maxWidth:'100%',
  height: 250,
  borderRadius:6,
  marginTop: 16
},
tittleContainer:{
  marginTop:4
},
content:{
  color: Colors.bodyText,
  marginTop:16
},
authorNameInfo:{
  marginStart:5
}

})