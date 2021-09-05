import { Category } from '@components/Category';
import { getProductData } from '@side-effects/server';
import { styles } from '@styles/market';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ICategory } from 'types';

const Market = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getProductData().then(setCategories);
  }, []);
  return (
    <View style={styles.market}>
      {categories.map(cat => (
        <Category key={cat.name} cat={cat} />
      ))}
    </View>
  );
};

export default Market;
