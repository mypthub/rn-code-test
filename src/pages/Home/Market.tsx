import { Categories } from '@components/Categories';
import { ProductDetails } from '@pages/Home/ProductDetails';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const MarketNavigation = createNativeStackNavigator();

const Market = () => {
  return (
    <MarketNavigation.Navigator>
      <MarketNavigation.Screen name="Product Market" component={Categories} />
      <MarketNavigation.Screen
        name="Product Details"
        component={ProductDetails}
      />
    </MarketNavigation.Navigator>
  );
};

export default Market;
