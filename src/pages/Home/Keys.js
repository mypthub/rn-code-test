import React, { useState } from 'react';
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Keys = () => {
  const [serviceKey, setServiceKey] = useState('not-set');

  NativeModules.RNKeys.getServiceKey(value => {
    setServiceKey(value);
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Service Key: {serviceKey}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Keys;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
