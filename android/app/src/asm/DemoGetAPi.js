import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Data } from './Contants/Data'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'
import ItemListNews from './ItemListNews'
import axios from 'axios'
import ItemProfile from './ItemProfile'

const DemoGetAPi = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        const getNews = async () => {
        console.log('aaaaaas');
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=452c7eeb42734989ae471850fef9463f');
        if(res != ""){
        setdata(res.data);
        }
        }
        getNews();
        return ()=>{}
        }, []);
  return (
    <View style={styles.container}>
  

    <View style={styles.labelFrag}>
    <Text style={[Typography.linkMedium,{color:'#000000'}]}>Latest</Text>

    <Text style={[Typography.textSmall,{color:Colors.bodyText}]}>See all</Text>

    </View>
           <FlatList
        data={data}
        renderItem={({item}) => <ItemProfile data={item}></ItemProfile>}
        keyExtractor={item => item._id}
      />
      {/* {
        Data.map((item) => <ItemListNews key={item._id} data={item} onPress1={onPress1} ></ItemListNews>) 
      } */}
    </View>
  )
}

export default DemoGetAPi

const styles = StyleSheet.create({})