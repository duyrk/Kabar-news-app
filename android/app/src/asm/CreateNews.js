import { Pressable, StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InputField from './Components/InputField'
import Buttons from './Components/Buttons'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'
import Dialog from "react-native-dialog"; 
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './util/AxiosIntance'
import { AppContext } from './util/AppContext'
const CreateNews = (props) => {
  const {setisReloading} = useContext(AppContext)
  const [newsTitle, setnewsTitle] = useState("")
  const [newsContent, setnewsContent] = useState("")
  const [buttonType, setbuttonType] = useState('secondary')
  const [uriImage, seturiImage] = useState("")
  const {navigation} = props
  const Back = () =>{
    navigation.goBack();
  }
  //#region dialog
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  //#endregion dialog
  const handlePublishButton = () =>{
    
    if(newsTitle!== '' && newsContent !== '' && uriImage !== ''){
      setbuttonType('primary')
    }else{
      setbuttonType('secondary')
    }
  }
  useEffect(() => {
    console.log(newsContent)
    console.log(newsTitle)
    handlePublishButton();
    return () => {
      
    }
  }, [newsTitle,newsContent,uriImage])
  
  

  const Capture =  async () =>{
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    seturiImage(result.assets[0].uri)
    handleCancel()
  }
  const Gallery = async ()=>{
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    seturiImage(result.assets[0].uri)
    handleCancel()
  }
  const uploadImageToServer = async () =>{
      const formdata = new FormData();
      formdata.append('image',{
          uri: uriImage,
          type: 'image/jpeg',
          name:'image.jpg',
      });
      try {
        const respone = await AxiosIntance("multipart/form-data").post('/media/upload',formdata)
        if(respone.error==true){
          ToastAndroid.show('Upload ảnh không thành công!')
        }else{
          Publish(respone.data.path)
        }
      } catch (error) {
        ToastAndroid.show('Upload ảnh không thành công!')
      }
      
     
  }
  const Publish = async (path) =>{
    try {
      const responePublish = await AxiosIntance().post('/articles',{title: newsTitle,content:newsContent,image:path})
      if(responePublish.error == false){
        ToastAndroid.show('Đăng tin thành công',ToastAndroid.SHORT)
        setisReloading(isReloading => isReloading+1)
        Back();
        
      }else{
        ToastAndroid.show('Đăng tin không thành công',ToastAndroid.SHORT)
      }
    } catch (error) {
      
    }
  }
  return (
    <View style={styles.container}>
  <View style={styles.particlecontainer}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
     <View style={styles.topParticle}>
       <Pressable style={styles.backButton} onPress={Back}>
           <Image source={require('../asm/images/ic_back.png')}></Image>
       </Pressable>
     <Text style={[Typography.textMedium,styles.headerText]}>Create News</Text>
     </View>
     <Pressable >
      <Image style={{tintColor: Colors.bodyText}} source={require('./images/ic_3dots.png')}></Image>
     </Pressable>
     </View>
    <View style={[styles.coverPhotoContainer,uriImage !== "" ? {borderWidth:0} : undefined]}>
      {
        uriImage !== "" ?
       <View >
        <Image style={styles.newsImage} source={{uri: uriImage}}></Image>
        <Pressable style={styles.editImageButton} onPress={showDialog}>
          
          <Image source={require('./images/ic_editBackground.png')}></Image>
          <Image style={{position:'absolute',right:5,bottom:5}} source={require('./images/ic_edit.png')}></Image>
        </Pressable>
      </View> 
    :
       <Pressable style={styles.addPhoto} onPress={showDialog}>
        <Image source={require('./images/ic_addPhoto.png')}></Image>
        <Text>Add Cover Photo</Text>
      </Pressable> 
}
    </View>

    <TextInput multiline={true} style={[styles.newsTitle,Typography.displaySmall]} onChangeText={setnewsTitle} placeholder={"News Title"} value={newsTitle} ></TextInput>
    <TextInput multiline={true} style={[Typography.textMedium,{color:Colors.bodyText}]} onChangeText={setnewsContent } placeholder={"Add News/Article"} value={newsContent} ></TextInput>
  
    
   </View>
   <View style={styles.bottomButtonContainer}>
    <View style={{flexDirection:'row'}}>
      <Image  source={require('./images/ic_fontSize.png')}></Image>
      <Image style={{marginLeft:29}} source={require('./images/ic_align.png')}></Image>
      <Image style={{marginLeft:29}} source={require('./images/ic_image.png')}></Image>
      <Image style={{marginLeft:29}} source={require('./images/ic_createNews3dots.png')}></Image>
    </View>
   <Buttons onPress={uploadImageToServer} value="Publish" type={buttonType} isDisabled={buttonType == 'secondary' ? true : false} paddingVertical={13} paddingHorizontal={24} ></Buttons>
     </View>
     <Dialog.Container  visible={visible}>
        <Dialog.Title>Add Cover Photo</Dialog.Title>

               <Pressable onPress={Capture} android_ripple={{color:Colors.disabledInput}} style={{flexDirection:'row',alignItems:'center',padding:15}}>
               <Image source={require('./images/ic_cameraOption.png')}></Image>
               <Text style={[Typography.linkMedium,{marginStart:10}]}>Open Camera</Text>  
                </Pressable> 
                <Pressable onPress={Gallery} android_ripple={{color:Colors.disabledInput}}  style={{flexDirection:'row',alignItems:'center',padding:15}}>
               <Image source={require('./images/ic_galleryOption.png')}></Image>
               <Text style={[Typography.linkMedium,{marginStart:10}]}>Open Gallery</Text>  
                </Pressable> 
        
        <Dialog.Button style={{color:Colors.primary}} label="Cancel" onPress={handleCancel} />
       
      </Dialog.Container>
    </View>
  
  )
}

export default CreateNews

const styles = StyleSheet.create({
    container:{
        flex: 1,   
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    particlecontainer:{

         marginStart:25,
         marginEnd:25,
         flexDirection: 'column',
        marginTop:28.22
       },
topParticle:{
flexDirection :'row',
alignItems:'center',

},
backButton:{

},
headerText:{
    marginLeft:103,
    fontWeight:'600',
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.12,
    color: '#000000'
},
coverPhotoContainer:{
height:183,
backgroundColor: Colors.disabledInput,
borderWidth:2,
borderStyle: 'dashed',
borderRadius:16,
justifyContent:'center',
marginTop:16,
borderColor: Colors.bodyText
},
addPhoto:{
  justifyContent:'center',
  alignItems:'center',
  height: '100%',

},
newsImage:{
  maxWidth:'100%',
  height:183,
  borderRadius:16
},
editImageButton:{
  position:'absolute',
  right:10,
  bottom:10
},
newsTitle:{
marginTop:16,
borderBottomWidth:1,
borderBottomColor:'#C4C4C4',
color: Colors.titleActive
},



bottomButtonContainer:{
paddingVertical:40,
paddingHorizontal:25,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.2,
shadowRadius: 1.41,

elevation: 2,
},
buttonStyle:{
    marginTop:16,
  backgroundColor:'#1877F2',
  paddingVertical:13,
  paddingHorizontal:24,
  borderRadius:6
   },
  innerButtonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'600',
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.12
  },




})