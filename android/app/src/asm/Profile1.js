import { Pressable, StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InputField from './Components/InputField'
import Buttons from './Components/Buttons'
import Dialog from "react-native-dialog"; 
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { Colors } from './Contants/Colors';
import { Typography } from './Contants/Typographies';
import { AppContext } from './util/AppContext';
import AxiosIntance from './util/AxiosIntance';
const Profile1 = (props) => {
  const {infoUser,setinfoUser} = useContext(AppContext);
const {navigation} = props
const [username, setusername] = useState('')
const [address, setaddress] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')
const [bio, setbio] = useState('')
const [Website, setWebsite] = useState('')
const [uriImage, seturiImage] = useState(infoUser.avatar)
//#region dialog
const [visible, setVisible] = useState();

const showDialog = () => {
  setVisible(true);
};

const handleCancel = () => {
  setVisible(false);
};

//#endregion dialog

const Capture =  async () =>{
  const result = await launchCamera();
  console.log(result.assets[0].uri);
  seturiImage(result.assets[0].uri)
  const formdata = new FormData();
  formdata.append('image',{
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name:'image.jpg',
  });
  try {
    const respone = await AxiosIntance("multipart/form-data").post('/media/upload',formdata)
    if(respone.error==true){
      ToastAndroid.show('Upload ảnh không thành công!',ToastAndroid.SHORT)
    }else{
      // Update(respone.data.path)
      setinfoUser({...infoUser, avatar: respone.data.path});
    }
  } catch (error) {
    ToastAndroid.show('Upload ảnh không thành công!',ToastAndroid.SHORT)
    
  }
  handleCancel()
}
const Gallery = async ()=>{
  const result = await launchImageLibrary();
  console.log(result.assets[0].uri);
  seturiImage(result.assets[0].uri)
  const formdata = new FormData();
  formdata.append('image',{
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name:'image.jpg',
  });
  try {
    const respone = await AxiosIntance("multipart/form-data").post('/media/upload',formdata)
    if(respone.error==true){
      ToastAndroid.show('Upload ảnh không thành công!',ToastAndroid.SHORT)
    }else{
      // Update(respone.data.path)
      setinfoUser({...infoUser, avatar: respone.data.path});
    }
  } catch (error) {
    ToastAndroid.show('Upload ảnh không thành công!',ToastAndroid.SHORT)
    
  }
  handleCancel()
}


const Cancel = () =>{
  navigation.goBack()
}
const Accept = ()=>{
  navigation.navigate('Profile')
  Update()
}


useEffect(() => {
  console.log(infoUser)

 
}, [infoUser])

 const Update = async () =>{
    const respone = await AxiosIntance().post('/users/update-profile',{name:infoUser.name,address:infoUser.address,phone:infoUser.phone,dob:infoUser.dob,avatar:infoUser.avatar})
    if(respone.error==false){
        ToastAndroid.show('Cập nhật thành công!',ToastAndroid.SHORT)
    }else{
      ToastAndroid.show('Cập nhật thất bại!',ToastAndroid.SHORT)
    }
 }    
  return (
    <View style={styles.container}>
  <View style={styles.particlecontainer}>
     
     <View style={styles.topParticle}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Pressable onPress={Cancel} style={styles.backButton}>
           <Image source={require('../asm/images/ic_cancel.png')}></Image>
       </Pressable>
     <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <Pressable onPress={Accept}>
      <Image source={require('../asm/images/ic_accept.png')}></Image>
      </Pressable>
      
     </View>
     <Pressable onPress={showDialog} style={{alignSelf:'center'}}>
         <Image style={styles.profileImage} source={uriImage !== "" ? {uri : uriImage} : require('./images/avatarFalse.png')}></Image>
         <Image style={styles.cameraIcon} source={require('../asm/images/ic_camera.png')}></Image>
     </Pressable>
     <View style={styles.profileInputContainer}>
       <Text style={styles.labelText}>Username</Text>
       <InputField value={infoUser.name} onChangeText={(text) =>{setinfoUser({...infoUser, name: text})}}></InputField>
     </View>
     <View style={styles.profileInputContainer}>
       <Text style={styles.labelText}>Address</Text>
       <InputField value={infoUser.address} onChangeText={(text) =>{setinfoUser({...infoUser, address: text})}}></InputField>     
     </View>
     <View style={styles.profileInputContainer}>
       <View style={styles.labelContainer}>
       <Text style={styles.labelText}>Email Address</Text>
       <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
       </View>
     
       <InputField editable={false} value={infoUser.email} onChangeText={(text) =>{setinfoUser({...infoUser, email: text})}}></InputField>
     </View>
     <View style={styles.profileInputContainer}>
       <View style={styles.labelContainer}>
       <Text style={styles.labelText}>Phone Number</Text>
       <Text style={[styles.labelText,{color:'#C30052'}]}>*</Text>
       </View> 
       <InputField value={infoUser.phone} onChangeText={(text) =>{setinfoUser({...infoUser, phone: text})}}></InputField>
     </View>
     <View style={styles.profileInputContainer}>
       <View style={styles.labelContainer}>
       <Text style={styles.labelText}>Date of Birth</Text>
       </View> 
       <InputField value={infoUser.dob} onChangeText={(text) =>{setinfoUser({...infoUser, dob: text})}}></InputField>
     </View>
     <View style={styles.profileInputContainer}>
       <View style={styles.labelContainer}>
       <Text style={styles.labelText}>Website</Text>
       </View> 
       <InputField value='' onChangeText={(text) =>{setWebsite(text)}}></InputField>
     </View>
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

export default Profile1

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
justifyContent:'space-between'
},
backButton:{

},
headerText:{
    marginLeft:115,
    fontWeight:'600',
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.12,
    color: '#000000'
},
profileImage:{
borderRadius:50,
marginTop:16,
width:100,
height:100,
},
cameraIcon:{
    width:25,
    height:25,
    position:'absolute',
    right:5,
    bottom:0
},
profileInputContainer:{
marginTop:16,

},
labelText:{
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:14,
    lineHeight: 21,
    letterSpacing: 0.12,
},
input:{
    borderWidth:1,
  borderColor:'#4E4B66',
  borderRadius:6,
  marginTop:4,
  padding: 10
},
labelContainer:{
    flexDirection:'row'
},

bottomButtonContainer:{
paddingVertical:40,
paddingHorizontal:25,
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