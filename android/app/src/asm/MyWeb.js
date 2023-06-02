import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
const MyWeb = () => {
  return (
    <WebView source={{ uri: 'https://github.com/duyrk' }} />
  )
}

export default MyWeb

const styles = StyleSheet.create({})