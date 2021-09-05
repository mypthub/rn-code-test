import { Categories } from '@components/Categories';
import { ProductDetails } from '@pages/Home/ProductDetails';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { MarketStackParams } from 'types';

const MarketNavigation = createNativeStackNavigator<MarketStackParams>();

const Market = () => {
  return (
    <MarketNavigation.Navigator>
      <MarketNavigation.Screen name="ProductMarket" component={Categories} />
      <MarketNavigation.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
    </MarketNavigation.Navigator>
  );
};

export default Market;
