import React from 'react';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import Product from '../../components/Product';
import products from '../../../assets/products.json';
import { groupBy, sortBy } from 'lodash';

const productsCatalog = groupBy(sortBy(products, 'order'), 'category');

const Market = () => (
  <SafeAreaView>
    <ScrollView>
      <FlatList
        data={productsCatalog.Pirate}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Product data={item} />}
      />
      <FlatList
        data={productsCatalog.Culinary}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Product data={item} />}
      />
      <FlatList
        data={productsCatalog['Sci-Fi']}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Product data={item} />}
      />
    </ScrollView>
  </SafeAreaView>
);

export default Market;
