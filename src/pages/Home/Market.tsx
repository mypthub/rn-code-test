import { AVATAR_URI, IMAGE_URI } from '@common/constants';
import { Price } from '@common/price';
import { range } from '@common/range';
import { ProductCategory } from '@components/ProductCategory';
import { commonStyles } from '@styles/common';
import React from 'react';
import { View } from 'react-native';
import { IProduct } from 'types';

const mkProduct = (category: string) => (n: number): IProduct => ({
  seller: {
    imageUri: `${AVATAR_URI}+${n}`,
  },
  price: Price.of(Math.round(Math.round(1000)))
              .discountBy(11)
              .amount(),
  title: `Product ${n}`,
  description: `Description ${n}`,
  picUri: `${IMAGE_URI}${category}+${n}`,
  order: Math.round(Math.random() * 10),
});

const mkCategory = (name: string) => ({
  name,
  products: range(10).map(mkProduct(name)),
});

const Market = () => {
  return (
    <View
      style={{
        ...commonStyles.avoidStatusBar,
        ...commonStyles.margin,
        ...commonStyles['full-height'],
        overflow: 'hidden',
        width: '97%',
      }}
    >
      <ProductCategory cat={mkCategory('Ships')} />
      <ProductCategory cat={mkCategory('Planes')} />
      <ProductCategory cat={mkCategory('Cars')} />
    </View>
  );
};

export default Market;
