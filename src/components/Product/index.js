import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function toCorrectCurrency(price) {
  if (price === 0) {
    return 'Free';
  }
  return '£' + (price / 100).toFixed(2);
}

function getOriginalPriceForProduct(product) {
  return toCorrectCurrency(product.price);
}

function getOriginalPriceStyleForProduct(product) {
  if (product.discount == null || product.discount_type == null) {
    return styles.text;
  }
  return styles.textWithStrike;
}

function getDiscountedPriceForProduct(product) {
  if (product.discount != null) {
    if (product.discount_type === 'amount') {
      return '  ' + toCorrectCurrency(product.price - product.discount);
    } else if (product.discount_type === 'percentage') {
      return (
        '  ' +
        toCorrectCurrency(
          product.price - product.price * (product.discount / 100),
        )
      );
    }
  }
  return '';
}

const Product = ({ product }) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: product.image }} style={styles.content}>
      <View style={styles.infoBar}>
        <View style={styles.infoBarTitlePriceAndAvatar}>
          <View style={styles.infoBarTitleAndPrice}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.priceBox}>
              <Text style={getOriginalPriceStyleForProduct(product)}>
                {getOriginalPriceForProduct(product)}
              </Text>
              <Text>{getDiscountedPriceForProduct(product)}</Text>
            </Text>
          </View>
          <Image
            source={require('../../../assets/avatar.png')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.description}>{product.short_description}</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    aspectRatio: 4 / 3,
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  infoBar: {
    backgroundColor: 'black',
    padding: 8,
    opacity: 0.5,
  },
  infoBarTitlePriceAndAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBarTitleAndPrice: {
    flexShrink: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceBox: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textWithStrike: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'red',
  },
  text: {},
  description: {
    color: 'white',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
});

export default Product;
