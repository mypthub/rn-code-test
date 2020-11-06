import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import mockData from '../../../assets/products.json';
import Product from '../../components/Product';

const Market = () => {
  const sortedList = genSortedList(mockData);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Order 1</Text>
        <FlatList
          data={sortedList[0]}
          horizontal
          renderItem={({ item }) => renderProduct(item, navigation)}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.separator} />
        <Text style={styles.heading}>Order 2</Text>
        <FlatList
          data={sortedList[1]}
          horizontal
          renderItem={({ item }) => renderProduct(item, navigation)}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.separator} />
        <Text style={styles.heading}>Order 3</Text>
        <FlatList
          data={sortedList[2]}
          horizontal
          renderItem={({ item }) => renderProduct(item, navigation)}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const genSortedList = rawData => {
  var sortedList = {};

  for (var i = 0; i < rawData.length; i += 1) {
    if (!sortedList[rawData[i].order]) {
      sortedList[rawData[i].order] = [];
    }
    sortedList[rawData[i].order].push(rawData[i]);
  }

  return sortedList;
};

const renderProduct = (product, navigation) => {
  return <Product data={product} navigation={navigation} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  heading: {
    paddingStart: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
  },
});

export default Market;
