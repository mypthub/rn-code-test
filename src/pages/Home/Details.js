import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Details = props => {
  const { productData } = props.route.params;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <Image
          resizeMode="contain"
          style={styles.productImage}
          source={{ uri: productData.image }}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{productData.name}</Text>
          {getProductPrice(productData)}
          <Text style={styles.description}>{productData.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getProductPrice = data => {
  const { price, discount, discount_type } = data;
  if (discount_type === null) {
    if (price === 0) {
      return (
        <Text style={styles.price} numberOfLines={1}>
          Free
        </Text>
      );
    } else {
      return (
        <Text style={styles.price} numberOfLines={1}>
          GBP {price.toFixed(2)}
        </Text>
      );
    }
  } else {
    var finalPrice;
    if (discount_type?.toLowerCase() === 'percentage') {
      finalPrice = (price * discount) / 100;
    } else if (discount_type?.toLowerCase() === 'amount') {
      finalPrice = price - discount;
    }

    if (finalPrice > 0) {
      return (
        <View style={styles.flexRow}>
          <Text style={styles.strikeThroughPrice}>GBP {price.toFixed(2)}</Text>
          <Text style={styles.price}> GBP {finalPrice.toFixed(2)}</Text>
        </View>
      );
    } else {
      return (
        <Text style={styles.price} numberOfLines={1}>
          Free
        </Text>
      );
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  flexRow: { flexDirection: 'row' },
  appBar: {
    width: '100%',
    height: '5%',
  },
  productImage: {
    aspectRatio: 4 / 3,
  },
  productDetails: {
    flex: 1,
    padding: 5,
  },
  productName: {
    fontSize: 20,
  },
  strikeThroughPrice: {
    textDecorationLine: 'line-through',
    paddingTop: 5,
  },
  price: {
    paddingTop: 5,
  },
  description: {
    textAlign: 'justify',
  },
});

export default Details;
