import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet, View } from 'react-native';
import Product from '../../components/Product';
import products from '../../../assets/products.json';

const Info = () => (
  <SafeAreaView>
    <Text>Follow the instructions in the README file at:</Text>
    <Text
      style={styles.link}
      onPress={() => {
        Linking.openURL(
          'https://github.com/mypthub/rn-code-test/blob/master/README.md',
        );
      }}>
      https://github.com/mypthub/rn-code-test/blob/master/README.md
    </Text>
    <Text>!!!!! DEBUGGING !!!!!</Text>
    <View style={{ maxWidth: 165 }}>
      <Product product={products[1]} />
    </View>
    <View style={{ maxWidth: 250 }}>
      <Product product={products[1]} />
    </View>
    <Product product={products[1]} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default Info;
