import { Category } from '@components/Category';
import { getProductData } from '@side-effects/server';
import { styles } from '@styles/categories';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ICategory } from '../types';

export const Categories = (): JSX.Element => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getProductData().then(setCategories);
  }, []);
  return (
    <View style={styles.categories}>
      {categories.map((cat) => (
        <Category key={cat.name} cat={cat} />
      ))}
    </View>
  );
};
