import { ProductInfo } from '@components/Product/ProductInfo';
import { RisingView } from '@components/RisingView';
import { styles } from '@styles/product';
import React from 'react';
import { Image } from 'react-native';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const Product = (props: Props) => {
  const { product: p } = props;
  return (
    <RisingView>
      <Image source={{ uri: p.image }} style={styles.product__image} />
      <ProductInfo product={p} />
    </RisingView>
  );
};

export default Product;
