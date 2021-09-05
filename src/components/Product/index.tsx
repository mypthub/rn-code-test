import { ProductInfo } from '@components/Product/ProductInfo';
import { RisingView } from '@components/RisingView';
import { useNavigation } from '@react-navigation/native';
import { styles } from '@styles/product';
import React from 'react';
import { Image } from 'react-native';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const Product = (props: Props) => {
  const { product: p } = props;
  const { navigate } = useNavigation();

  const gotoDetails = () => {
    navigate('ProductDetails', { id: p.id });
  };

  return (
    <RisingView onTouch={gotoDetails}>
      <Image source={{ uri: p.image }} style={styles.product__image} />
      <ProductInfo product={p} />
    </RisingView>
  );
};

export default Product;
