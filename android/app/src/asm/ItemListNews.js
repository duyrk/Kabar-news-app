import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Typography } from './Contants/Typographies';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const goDetail = () => {

}
const ItemListNews = (props) => {
  const { data, onPress1 } = props;
  return (
    <Pressable
    android_ripple={{color:'white'}}
    onPress={() => onPress1(data)}>
      <View style={styles.newsContainer}>
        <Image style={styles.image} source={{ uri: data.image }}>
        </Image>
        <View style={styles.newsLabelContainer}>
          <Text style={Typography.textXSmall}>Việt Nam</Text>
          <Text numberOfLines={2} style={[Typography.textMedium, { color: '#000000' }]}>{data.title}</Text>

          <View style={styles.creditsContainer}>
            <View style={styles.credits}>
              <Image style={{ marginEnd: 4, width: 20, height: 20 }} source={require('../asm/images/ic_authorLogo.png')}></Image>
              <Text>VnExpress</Text>
            </View>

            <Pressable>
              <Image source={require('../asm/images/ic_3dotscredit.png')}></Image>
            </Pressable>

          </View>
        </View>
      </View>
    </Pressable>



  )
}

export default ItemListNews

const styles = StyleSheet.create({
  image: {
    width: 96,
    height: 96,
    borderRadius: 10,
    margin: 10
  },
  newsContainer: {
    flexDirection: 'row'
  },
  newsLabelContainer: {
    marginTop: 8
  },
  creditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  credits: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }


})