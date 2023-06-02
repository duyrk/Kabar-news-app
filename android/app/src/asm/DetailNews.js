import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import DetailNewsParticle from './DetailNewsParticle'
import HeartButton from './Components/HeartButton'
import BookmarkButton from './Components/BookmarkButton'
import { Typography } from './Contants/Typographies'
import { Colors } from './Contants/Colors'
const DetailNews = (props) => {
  const { navigation , route} = props;
  const {params} = route
  const goPrevious = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.container}>
        <Pressable onPress={goPrevious} >
          <Image source={require('../asm/images/ic_back.png')}></Image>
        </Pressable>
        <View style={styles.rightSideButton}>
          <Pressable>
            <Image source={require('../asm/images/ic_share.png')}></Image>
          </Pressable>
          <Pressable >
            <Image source={require('../asm/images/ic_3dots.png')}></Image>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.mainContent}>
        <DetailNewsParticle item={params.item}></DetailNewsParticle>
      </ScrollView>
      <View style={styles.reactionBar}>
        <View style={styles.reactionContentBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <HeartButton styles={{ marginEnd: 6 }}></HeartButton>
            <Text style={[Typography.textMedium, { color: Colors.titleActive }]}>24.5K</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable style={{ marginEnd: 6 }}>
              <Image source={require('../asm/images/ic_comment.png')}></Image>
            </Pressable>
            <Text style={[Typography.textMedium, { color: Colors.titleActive }]}>1K</Text>
          </View>
        </View>
        <BookmarkButton></BookmarkButton>
      </View>
    </View>

  )
}

export default DetailNews

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  container: {
    flexDirection: 'row',
    marginTop: 24,
    marginStart: 25,
    marginEnd: 25,
    marginTop: 28.22,
    justifyContent: 'space-between'
  },
  rightSideButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  reactionBar: {
    height: 78,
    paddingVertical: 34,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reactionContentBar: {
    flexDirection: 'row',
    width: 156,
    justifyContent: 'space-between'
  },
  mainContent: {
    paddingHorizontal: 25,
    marginTop: 18
  },


})