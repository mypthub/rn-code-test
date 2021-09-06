import { Categories } from '@components/Categories';
import { ProductDetails } from '@pages/ProductDetails';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { MarketStackParams } from '../../types';

const MarketNavigation = createNativeStackNavigator<MarketStackParams>();

const Market = (): JSX.Element => {
  return (
    <MarketNavigation.Navigator>
      <MarketNavigation.Screen
        name="ProductMarket"
        component={Categories}
        options={{
          title: 'Market',
        }}
      />
      <MarketNavigation.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'Product Details',
        }}
      />
    </MarketNavigation.Navigator>
  );
};

export default Market;
