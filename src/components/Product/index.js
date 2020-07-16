import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const Product = ({product}) => {
  
  var price = product.price.toFixed(2);
  var price_view = null;
  if (product.discount_type == "amount") {
    price -= product.discount;
    if (price == 0) {
      price_view = <Text style={styles.text}>Free</Text>;
    } else {
      price_view = 
      <View style={styles.price_view}>
        <Text style={styles.text}>{price.toFixed(2)}£ - </Text>
        <Text style={styles.text_discount}>{product.price.toFixed(2)}£</Text>
      </View>
    }
  } else if (product.discount_type == "percentage") {
    price -= price * product.discount / 100;
    if (price == 0) {
      price_view = <Text style={styles.text}>Free</Text>;
    } else {
      price_view = 
      <View style={styles.price_view}>
        <Text style={styles.text}>{price.toFixed(2)}£ - </Text>
        <Text style={styles.text_discount}>{product.price.toFixed(2)}£</Text>
      </View>
    }
  } else {
    if (price == 0) {
      price_view = <Text style={styles.text}>Free</Text>;
    } else {
      price_view = <Text style={styles.text}>{price}£</Text>
    }
  }

  return (
    <ImageBackground source={{uri: product.image}} style={styles.image}>
      <View style={styles.info_bar}>
        <View style={styles.title_view}>
          <View>
            <Text style={styles.text}>{product.name}</Text>
            {price_view}
          </View>
          <View style={styles.avatar_view}>
          <UserAvatar size={20} src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" />
          </View>
        </View>
        <Text style={styles.text_description}>{product.short_description}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 4/3,
    justifyContent: 'flex-end',
    borderRadius: 15,
    overflow: 'hidden',
  },
  info_bar: {
    padding: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  price_view: {
    flexDirection: 'row',
  },
  avatar_view: {
    justifyContent: 'center',
  },
  avatar: {
    aspectRatio: 4/3,
    borderRadius: 15,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  text_discount: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  text_description: {
    color: 'gray',
    fontSize: 12,
  },
});

export default Product;
