
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Platform, View, Style } from 'react-native';
import { NativeModules } from 'react-native';
const { FetchKeyANDROID, FetchKeyIOS } = NativeModules;

function FetchKey() {
  const [key, setKey] = useState("")

  useEffect(() => {


    if (Platform.OS === 'ios') {
      FetchKeyIOS.getKey((key) => setKey(key));
    }
    else {
      FetchKeyANDROID.getKey(
        (key) => {
          console.log('key ', key);
          setKey(key)
        }
      );
    }


  });


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
        <Text style={{ color: 'red', fontSize: 15, width: '100%', textAlign: "center" }}> Service Key: {key}</Text>
      </View>
    </SafeAreaView>
  )

}
export default FetchKey;
