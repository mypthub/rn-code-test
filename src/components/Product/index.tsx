import { styles } from '@styles/product';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Product = () => {
  return (
    <View style={styles.product}>
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={styles.product__image}
      />
      <View style={styles.product__info}>
        <Text>Misha</Text>
      </View>
    </View>
  );
};

export default Product;
