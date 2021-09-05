import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '@styles/product-details';
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
    <View style={styles['product-details']}>
      <Text>Details {id}</Text>
      <Text>Details {id}</Text>
      <Text>Details {id}</Text>
      <Text>Details {id}</Text>
      <Text>Details {id}</Text>
    </View>
  );
};
