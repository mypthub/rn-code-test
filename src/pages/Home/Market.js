import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Product from '../../components/Product';
import products from '../../../assets/products.json';

const Market = () => (
  <SafeAreaView>
    <Product product={products[0]} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
});

export default Market;
