import { useState } from "react";
import { TouchableOpacity, View, Text, Image,StyleSheet } from "react-native";
import {CountryPicker} from "react-native-country-codes-picker";

const Test2 = () => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [flag, setflag] = useState('')
    console.log(flag)
  return (
    <View >
    <TouchableOpacity
      onPress={() => setShow(true)}
      style={{
          width: '80%',
          height: 60,
   
          padding: 10,
      }}
    >
      <Text style={{
          color: 'black',
          fontSize: 20
      }}>
          {countryCode}
      </Text>
     <Text style={{fontSize:24}}>{flag}</Text>
    </TouchableOpacity>

  
    <CountryPicker
      show={true}
      // when picker button press you will get the country object with dial code
      pickerButtonOnPress={(item) => {
        setCountryCode(item.dial_code);
        setflag(item.flag)
        setShow(false);
      }}
    />
  </View>
  )
}

export default Test2

const styles = StyleSheet.create({
    container:{

    }
})