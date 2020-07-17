import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import Product from '../../components/Product';
import products from '../../../assets/products.json';

const Market = () => {
  var products_sorted = {};
  products.forEach(product => {
    if (product.category in products_sorted) {
      products_sorted[product.category].splice(product.order, 0, product);
    } else {
      products_sorted[product.category] = [product];
    }
  });

  const renderProducts = ({ item }) => {
    return (
      <View>
        <Product data={item} />
      </View>
    );
  };

  const renderLists = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item[0].category}</Text>
        <FlatList horizontal={true} data={item} renderItem={renderProducts} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={Object.values(products_sorted)}
        renderItem={renderLists}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  text: {
    color: 'black',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
});

export default Market;
