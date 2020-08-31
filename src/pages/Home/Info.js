import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet } from 'react-native';
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
    <Product product={products[0]} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default Info;
