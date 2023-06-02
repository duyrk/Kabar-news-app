import { StyleSheet, Text, View,Pressable,Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'
import Buttons from './Components/Buttons'
import AxiosIntance from './util/AxiosIntance'
import ItemListNews from './ItemListNews'
import WebView from 'react-native-webview'
import { AppContext } from './util/AppContext'

const UserProfile = (props) => {
    const{isReloading,setisReloading} = useContext(AppContext)
    const {infoUser, setinfoUser} = useContext(AppContext)
    const {navigation} = props
    const [isLoading, setisLoading] = useState(true)
    const [data, setdata] = useState([])
    const getMyData = async () =>{
        try {
            const getMyArticles = await AxiosIntance().get('/articles/my-articles');
            if(getMyArticles.error == false){
                setdata(getMyArticles.data)
                
            }else{
                console.log('lấy danh sách bài viết cá nhân thất bại')
            }
        } catch (error) {
            console.log('lấy danh sách bài viết cá nhân thất bại')
        }
      
    }
  
    useEffect(() => {
      
        getMyData();
      
    }, [isReloading])
    
    useEffect(() => {
      setinfoUser(infoUser)
      
    }, [infoUser])
    
    const goDetail = (item) =>{
        navigation.navigate('DetailNews',{item: item});
      }
    const goSettings = () =>{
        navigation.navigate('ProfileSettings')
    }
    const goCreateNews = () =>{
        navigation.navigate('CreateNews')
    }
    const goMyWeb = () =>{
        navigation.navigate('MyWeb')
    }
    const goEditProfile = () =>{
        navigation.navigate('EditProfile')
    }
  return (
    <View style={styles.container}>
     <View style={styles.topParticle}>
     <Text style={[styles.headerText,Typography.textMedium]}>Profile</Text>
     <Pressable style={styles.backButton} onPress={goSettings}>
           <Image source={require('../asm/images/ic_settings.png')}></Image>
       </Pressable>
     </View>
     <View style={styles.userInfo}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Pressable >                   
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri: infoUser.avatar}}></Image>                        
                        </Pressable>

                        <View style={{marginStart:16, flexDirection:'row'}}>
                            <View style={{alignItems:'center'}}>
                                <Text style={[Typography.linkMedium,{color:'#000000'}]}>2156</Text>
                                <Text>Followers</Text>
                            </View>
                            <View style={{alignItems:'center',marginStart:34.5}}>
                                <Text style={[Typography.linkMedium,{color:'#000000'}]}>567</Text>
                                <Text>Following</Text>
                            </View>
                            <View style={{alignItems:'center',marginStart:34.5}}>
                                <Text style={[Typography.linkMedium,{color:'#000000'}]}>23</Text>
                                <Text>News</Text>
                            </View>
                        </View>
                </View>
                <View style={{marginTop:16}}>
                    <Text style={[Typography.linkMedium,{color:'#000000'}]}>{infoUser.name}</Text>
                    <Text style={[Typography.textMedium,Colors.bodyText]}>I am the storm that is Approaching</Text>
                </View>
                <View style={{marginTop:16,flexDirection:'row', justifyContent:'space-between'}}>
    <Buttons onPress={goEditProfile} type="primary" value="Edit Profile" paddingVertical={13} paddingHorizontal={47.5}></Buttons>
    <Buttons onPress={goMyWeb} type="primary" value="Website" paddingVertical={13} paddingHorizontal={47.5}></Buttons>
                </View>
     </View>
        <FlatList style={{marginTop:54.26}}
        data={data}
        renderItem={({item}) => <ItemListNews onPress1={goDetail} data={item}></ItemListNews>}
        keyExtractor={item => item._id}
      /> 
   <Pressable style={styles.floatingButton} onPress={goCreateNews}>
    <Image style={{width:54,height:54}} source={require('./images/ic_add.png')}></Image>
   </Pressable>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:24,
        marginStart:25,
        marginEnd:25
    },
    topParticle:{
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'flex-end'
        },
    headerText:{
        marginRight:130,
        color:'#000000'
        },
    userInfo:{
        marginTop:13
        },
    floatingButton:{
        position:'absolute',
        right:0,
        bottom:27
    }
})