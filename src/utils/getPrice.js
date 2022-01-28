import React from 'react';
import { Text, StyleSheet } from 'react-native';

const getPrice = data => {
  let price = data.price;
  let availDiscount = false;
  if (data.discount_type === 'percentage') {
    price = price - (price / 100) * data.discount;
    availDiscount = true;
  } else if (data.discount_type === 'amount') {
    price = price - data.discount;
    availDiscount = true;
  }

  price = (price / 100).toFixed(2);

  if (price === '0.00') {
    price = 'Free';
  } else {
    price = `£ ${price}`;
  }

  return (
    <>
      {availDiscount && (
        <Text style={styles.price}>£ {(data.price / 100).toFixed(2)} </Text>
      )}
      <Text>{price}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  price: {
    textDecorationLine: 'line-through',
  },
});

export default getPrice;
