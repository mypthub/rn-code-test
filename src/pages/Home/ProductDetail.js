import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, View } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';


const ProductDetail = ({ navigation }) => {

  const [item, setItem] = useState(navigation.state.params)

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: item.currency,
  });
  var price = 0
  var original_price_text = formatter.format(item.price);
  if (item.discount_type == "value") {
    price = item.price - item.discount
  }
  else {
    price = item.price - (item.price * item.discount / 100)
  }
  if (price > 0) {
    price = price / 100.0
  }
  else {
    original_price_text = ''
  }
  const discount_price = price
  const original_price = original_price_text


  var discount_text = formatter.format(discount_price);



  return (


    <View>

      <Image style={styles.image_style} source={{ uri: item.product_image }} resizeMode={'cover'}></Image>
      <View position="absolute" style={styles.transparent_view_style} />
      <View flexDirection="row" position="absolute" style={styles.overlap_view_style} >
        <View style={{ flex: 1 }}>
          <Text style={[styles.text_style, { fontSize: 16 }]}>{item.name}</Text>
          <Text style={{ marginHorizontal: 8 }}>
            <Text style={{ textDecorationLine: 'line-through', color: 'white' }}>{original_price}</Text>
            <Text style={{ fontWeight: "bold", color: 'white' }}> {discount_price > 0 ? discount_text : 'Free'} </Text>
          </Text>
          <Text style={[styles.text_style, { fontSize: 12, flexShrink: 1 }]}>{item.description}</Text>
        </View>
        <Image style={styles.user_image_style} source={{ uri: item.user_image }} />
      </View>

    </View>
  )



}
const styles = StyleSheet.create({

  image_style: {
    width: '100%',
    height: '100%',

  },
  transparent_view_style: {
    height: 160,
    backgroundColor: 'black',
    bottom: 0,
    width: '100%',
    opacity: 0.3,
  },
  overlap_view_style: {
    height: 160,
    backgroundColor: 'transparent',
    bottom: 0,
    width: '100%',
    justifyContent: "space-between"
  },
  text_style: {
    marginHorizontal: 8,
    marginVertical: 5,
    color: 'white',
  },
  user_image_style: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 15,
    margin: 10
  }
});


export default ProductDetail;
