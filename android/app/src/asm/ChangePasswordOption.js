import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Typography } from './Contants/Typographies'

const ChangePasswordOption = (props) => {
    const {navigation} = props
    const PreviousScreen = () =>{
        navigation.goBack()
    }
    const goChangePass= () =>{
        navigation.navigate('ChangePass')
    }
    return (
        <View style={styles.container}>
            <View style={styles.topParticle}>
                <Pressable style={styles.backButton} onPress={PreviousScreen}>
                    <Image source={require('../asm/images/ic_back.png')}></Image>
                </Pressable>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={{ marginTop: 20.22 }}>
                <Pressable style={styles.settingcard} onPress={goChangePass}>
                    <View style={styles.settingcardinner}>
                        <Image source={require('./images/ic_configure.png')}></Image>
                        <Text style={[Typography.textMedium, { marginLeft: 8, color: '#000000' }]}>Change Password</Text>
                    </View>
                    <Image source={require('./images/ic_expand.png')}></Image>
                </Pressable>
            </View>
        </View>
    )
}

export default ChangePasswordOption

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
      
      },
      headerText:{
        marginLeft:103,
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        letterSpacing:0.12,
        color: '#000000'
    },
    settingcard:{
      flexDirection:'row',
      justifyContent:'space-between'

    },
    settingcardinner:{
      flexDirection:'row',
      alignItems:'center'
    }


})
