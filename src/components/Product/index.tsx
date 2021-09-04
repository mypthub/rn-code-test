import { ProductInfo } from '@components/Product/ProductInfo';
import { styles } from '@styles/product';
import React from 'react';
import { Image, View } from 'react-native';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const Product = (props: Props) => {
  const { product: p } = props;
  return (
    <View style={styles.product}>
      <Image source={{ uri: p.picUri }} style={styles.product__image} />
      <ProductInfo product={p} />
    </View>
  );
};

export default Product;
