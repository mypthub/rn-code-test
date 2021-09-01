import Product from '@components/Product';
import { styles } from '@styles/market';
import React from 'react';
import { View } from 'react-native';

const Market = () => {
  return (
    <View style={styles.market}>
      <Product />
    </View>
  );
};

export default Market;
