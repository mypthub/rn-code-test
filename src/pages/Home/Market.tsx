import { AVATAR_URI, IMAGE_URI } from '@common/constants';
import { Price } from '@common/price';
import Product from '@components/Product';
import { styles } from '@styles/market';
import React from 'react';
import { ScrollView } from 'react-native';
import { IProduct } from 'types';

const mkProduct = (n: number): IProduct => ({
  seller: {
    imageUri: `${AVATAR_URI}+${n}`,
  },
  price: Price
    .of(Math.round(Math.round(Math.random() * 1000)))
    .discountBy(-10)
    .percents(),
  title: `Product ${n}`,
  description: `Description ${n}`,
  picUri: `${IMAGE_URI}+${n}`,
});

const Market = () => {
  const products = [1, 2, 3].map(mkProduct);
  return (
    <ScrollView style={styles.market}>
      {products.map(p => (
        <Product key={p.title} product={p} />
      ))}
    </ScrollView>
  );
};

export default Market;
