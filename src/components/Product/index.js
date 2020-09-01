import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import InfoBar from './InfoBar';

const Product = ({ product }) => {
  const [displaySizeHint, setDisplaySizeHint] = useState('normal');
  return (
    <View
      style={styles.container}
      onLayout={event => {
        const width = event.nativeEvent.layout.width;
        if (width <= 250) {
          setDisplaySizeHint('small');
        } else if (width <= 350) {
          setDisplaySizeHint('medium');
        } else {
          setDisplaySizeHint('normal');
        }
      }}>
      <ImageBackground source={{ uri: product.image }} style={styles.content}>
        <InfoBar product={product} displaySizeHint={displaySizeHint} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  content: {
    resizeMode: 'contain',
    aspectRatio: 4 / 3,
    justifyContent: 'flex-end',
  },
});

export default Product;
