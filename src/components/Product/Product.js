import React, { useRef, useEffect, useState } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Product = ({ item, width }) => {

  const navigation = useNavigation();

  const scale = useRef(new Animated.Value(1)).current;
  const [product_item, setItem] = useState(item)

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


  useEffect(() => {
    // Update the document title using the browser API
    console.log("scale-->", scale)
    // scale.current = 1
    // opacity.current = 1

    setItem(item)
  }, []);



  const animateTouch = () => {
    console.log("BK")

    Animated.sequence([
      Animated.spring(scale, {
        toValue: 0.8,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      })
    ]).start(() => {
      console.log("Animation completed")
      navigation.navigate('ProductDetail', product_item)
      // scale.current=1
    })
  }
  return (

    <View style = {{margin:10}}>

  
    <TouchableOpacity style={[styles.touch_style, { width: width, height: width * 0.75 }]} onPress={() => {
      animateTouch()
    }}>

      <Animated.View style={[styles.animated_view_style, { transform: [{ scale }] }]}>

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

      </Animated.View>

    </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({

  touch_style: {
    margin: 10,
    borderRadius: 10
  },
  animated_view_style: {
    width: '100%',
    height: '100%',
    margin: 10,
    opacity: 1
  },
  image_style: {
    width: '100%',
    height: '100%',
    borderRadius: 10

  },
  transparent_view_style: {
    height: 90,
    backgroundColor: 'black',
    bottom: 0,
    width: '100%',
    opacity: 0.3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  overlap_view_style: {
    height: 90,
    backgroundColor: 'transparent',
    bottom: 0,
    width: '100%',
    justifyContent: "space-between"
  },
  text_style: {
    marginHorizontal: 8,
    marginVertical: 5,
    color: 'white',
    fontWeight : "600"
  },
  user_image_style: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 15,
    margin: 10
  }
});
export default Product;










