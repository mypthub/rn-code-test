import { Price } from '@common/price';
import { formatPrice } from '@common/strings';
import { Avatar } from '@components/Avatar';
import { styles } from '@styles/product';
import React from 'react';
import { Text, View } from 'react-native';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const maybeDiscount = (p: Price): React.ReactNode =>
  p.isDiscounted ? (
    <Text style={styles['product__info__props--discount']}>
      {formatPrice(p.price)}
    </Text>
  ) : null;

export const ProductInfo = (props: Props) => {
  const { product: p } = props;
  return (
    <View style={styles.product__info}>
      <View style={styles.product__info__props}>
        <Text style={styles['product__info__props--title']}>{p.title}</Text>
        <Text style={styles['product__info__props--price']}>
          {formatPrice(p.price.value)}
          <Text>{" "}</Text>
          {p.price.map(maybeDiscount)}
        </Text>
        <Text style={styles['product__info__props--description']}>
          {p.description}
        </Text>
      </View>
      <View style={styles.product__info__avatar}>
        <Avatar uri={p.seller.imageUri} size="small" />
      </View>
    </View>
  );
};
