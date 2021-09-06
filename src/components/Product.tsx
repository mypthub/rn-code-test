import { ProductInfo } from '@components/ProductInfo';
import { RisingView } from '@components/RisingView';
import { useNavigation } from '@react-navigation/native';
import { styles } from '@styles/product';
import React from 'react';
import { Image } from 'react-native';
import { IProduct } from '../types';

type Props = {
  product: IProduct;
};

const Product = (props: Props): JSX.Element => {
  const { product: p } = props;
  const { navigate } = useNavigation();

  const gotoDetails = () => {
    navigate('ProductDetails', { product: p });
  };

  return (
    <RisingView onTouch={gotoDetails}>
      <Image source={{ uri: p.image }} style={styles.product__image} />
      <ProductInfo product={p} />
    </RisingView>
  );
};

export default Product;
