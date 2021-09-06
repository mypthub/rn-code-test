import { formatPrice } from '@common/strings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '@styles/product-details';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { MarketStackParams } from '../types';

type Props = NativeStackScreenProps<MarketStackParams, 'ProductDetails'>;

export const ProductDetails: React.FC<Props> = (props) => {
  const {
    route: {
      params: { product },
    },
  } = props;
  return (
    <ScrollView>
      <View style={styles['product-details']}>
        <Image
          style={styles['product-details__image']}
          source={{ uri: product.image }}
        />
        <Text style={styles['product-details__title']}>{product.name}</Text>
        <Text style={styles['product-details__price']}>
          {formatPrice(product.price.value)}
        </Text>
        <Text style={styles['product-details__desc']}>
          {product.description}
        </Text>
      </View>
    </ScrollView>
  );
};
