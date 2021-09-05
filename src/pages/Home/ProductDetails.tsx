import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { MarketStackParams } from 'types';

type Props = NativeStackScreenProps<MarketStackParams, 'ProductDetails'>;

export const ProductDetails: React.FC<Props> = props => {
  const {
    route: {
      params: { id },
    },
  } = props;
  return (
    <View style={{ paddingTop: 100 }}>
      <Text>Details {id}</Text>
    </View>
  );
};
