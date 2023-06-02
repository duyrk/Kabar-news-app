import { ActivityIndicator, FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputFieldIcon from './Components/InputFieldIcon'
import AxiosIntance from './util/AxiosIntance'
import { Colors } from './Contants/Colors'
import ItemListNews from './ItemListNews'

const FindNews = (props) => {
    const [newsTitle, setnewsTitle] = useState('')
    const [data, setdata] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const {navigation} = props
    const goDetail = (item) =>{
      navigation.navigate('DetailNews',{item: item});
    }
    
    let timeOut = null
    const countDownSearch = (searchText) =>{
      if(timeOut){
        clearTimeout(timeOut);
      }
      timeOut = setTimeout( ()=>{
     search(searchText);   
      },500)
    }
    const search = async (searchText)=>{
      try {
        const respone = await AxiosIntance().get('/articles/search?title='+searchText)
        if(respone.error==false){
            setdata(respone.data)
            setisLoading(false)
        }else{
            ToastAndroid.show('Không có dữ liệu 11',ToastAndroid.SHORT)
        }
    } catch (error) {
        ToastAndroid.show('Không có dữ liệu 1111',ToastAndroid.SHORT)
        console.log(error)
    }
    }
  return (
    <View style={styles.container}>
     <InputFieldIcon value='' onChangeText={(newsTitle)=>{countDownSearch(newsTitle)}}></InputFieldIcon>

    { isLoading ==true && newsTitle !== "" ? 
        <View style={styles.LoadingScreen}>         
          <ActivityIndicator size='large' color={Colors.primary}></ActivityIndicator>
        </View>
        :
     <FlatList style={{marginTop:54.26}}
        data={data}
        renderItem={({item}) => <ItemListNews onPress1={goDetail} data={item}></ItemListNews>}
        keyExtractor={item => item._id}></FlatList>}
    </View>
  )
}

export default FindNews

const styles = StyleSheet.create({

    container:{
        marginTop:24,
        marginStart:25,
        marginEnd:25
    }
})