import Product from '@components/Product';
import { styles } from '@styles/category';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ICategory, IProduct } from '../types';

type Props = {
  cat: ICategory;
};

const byOrder = (a: IProduct, b: IProduct): number => {
  return a.order - b.order;
};

export const Category = (props: Props): JSX.Element => {
  const { products, name } = props.cat;
  return (
    <View style={styles['product-category']}>
      <Text style={styles['product-category__title']}>{name}</Text>
      <ScrollView style={styles['product-category__scroll']} bounces horizontal>
        {products.sort(byOrder).map((p) => (
          <Product key={p.name} product={p} />
        ))}
      </ScrollView>
    </View>
  );
};
