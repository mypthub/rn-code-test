import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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

function toCorrectCurrency(price) {
  if (price === 0) {
    return 'Free';
  }
  return '£' + (price / 100).toFixed(2);
}

function getMaxNumberOfLines(displaySizeHint) {
  if (displaySizeHint === 'small') {
    return 1;
  } else if (displaySizeHint === 'medium') {
    return 2;
  }
  return 0;
}

function getAdaptiveStyles(displaySizeHint) {
  if (displaySizeHint === 'small') {
    return smallStyles;
  } else if (displaySizeHint === 'medium') {
    return mediumStyles;
  } else if (displaySizeHint === 'full') {
    return fullStyles;
  }
  return styles;
}

const InfoBar = ({ product, displaySizeHint }) => {
  const maxNumberOfLines = getMaxNumberOfLines(displaySizeHint);
  const adaptiveStyles = getAdaptiveStyles(displaySizeHint);
  const containerStyle = {
    backgroundColor: 'black',
    padding: 8,
    opacity: displaySizeHint === 'full' ? 1 : 0.5,
  };

  return (
    <View style={containerStyle}>
      <View style={styles.titlePriceAndAvatar}>
        <View style={styles.titleAndPrice}>
          <Text numberOfLines={maxNumberOfLines} style={adaptiveStyles.title}>
            {product.name}
          </Text>
          <Text style={adaptiveStyles.priceBox}>
            <Text style={getOriginalPriceStyleForProduct(product)}>
              {getOriginalPriceForProduct(product)}
            </Text>
            <Text>{getDiscountedPriceForProduct(product)}</Text>
          </Text>
        </View>
        <Image
          source={require('../../../assets/avatar.png')}
          style={adaptiveStyles.avatar}
        />
      </View>
      <Text numberOfLines={maxNumberOfLines} style={adaptiveStyles.description}>
        {displaySizeHint === 'full'
          ? product.description
          : product.short_description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 8,
    opacity: 0.5,
  },
  titlePriceAndAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleAndPrice: {
    flexShrink: 1,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceBox: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 15,
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
    fontSize: 12,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
});

const smallStyles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceBox: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 10,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
});

const mediumStyles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  priceBox: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 11,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

const fullStyles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceBox: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
});

export default InfoBar;
