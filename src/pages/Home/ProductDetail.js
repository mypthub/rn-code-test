import React from 'react';
import { ScrollView, Text, StyleSheet, Image, Dimensions } from 'react-native';
import getPrice from '../../utils/getPrice';
import products from '../../../assets/products.json';
import { View } from 'react-native';
const { width } = Dimensions.get('screen');

const data = products[0];

const ProductDetail = () => {
  return (
    <ScrollView style={styles.container} activeOpacity={1}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/4_3.png')}
        resizeMode="contain"
      />
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.title}>{getPrice(data)}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.space} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: width - 40,
    aspectRatio: 4 / 3,
    borderRadius: 4,
    overflow: 'hidden',
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    color: '#000',
    fontWeight: '500',
    fontSize: 12,
  },
  space: {
    height: 50,
  },
});

export default ProductDetail;
