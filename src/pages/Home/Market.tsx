import { AVATAR_URI, IMAGE_URI } from '@common/constants';
import Product from '@components/Product';
import { styles } from '@styles/market';
import React from 'react';
import { View } from 'react-native';
import { IProduct } from 'types';

const product: IProduct = {
  seller: {
    imageUri: AVATAR_URI,
  },
  description: 'Decription 1',
  picUri: IMAGE_URI,
  price: 10,
  title: 'Title 1',
};

const Market = () => {
  return (
    <View style={styles.market}>
      <Product product={product} />
    </View>
  );
};

export default Market;
