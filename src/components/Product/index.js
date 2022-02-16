import React, { Component } from 'react';

import { View, Image, Text, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 20;
const height = width / 1.33;

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {
      id,
      name,
      image,
      short_description,
      description,
      price,
      discount,
      discount_type,
      order,
      category,
      pressed,
    } = this.props.item;
    //if (pressed) alert(category + ' ' + name);
    let Dprice =
      ' ' +
      Math.round(
        discount == null
          ? price / 100
          : (discount_type == 'percentage'
              ? price - (price / 100) * discount
              : price - discount) / 100,
      ).toFixed(2);
    price = Math.round(price / 100).toFixed(2);

    if (Dprice == 0.0) Dprice = ' Free';
    else Dprice = ' £' + Dprice;

    if (discount != null) price = '£ ' + price;

    return (
      <View
        key={this.props.index}
        style={{
          scaleX: pressed ? 1.05 : 1,
          scaleY: pressed ? 1.05 : 1,
          width,
          borderRadius: 5,
          backgroundColor: 'rgba(0,0,0,0.8)',
          marginVertical: 10,
          marginHorizontal: 5,
        }}>
        <Image
          source={{ uri: image }}
          style={{
            width,
            height,
            resizeMode: 'cover',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        />

        <View
          style={{
            paddingHorizontal: 12,
            paddingTop: 9,
            paddingBottom: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ width: width - 60 }}>
              <Text style={{ color: 'white', fontSize: 15 }} numberOfLines={2}>
                {name}
              </Text>
              <Text style={{ color: 'white', fontSize: 19 }}>
                {discount !== null && (
                  <Text style={{ textDecorationLine: 'line-through' }}>
                    {price}
                  </Text>
                )}
                {Dprice}
              </Text>
            </View>

            <Image
              source={{ uri: 'https://imageipsum.com/50x50' }}
              style={{ width: 30, height: 30, borderRadius: 30 }}
            />
          </View>
          <Text style={{ color: '#BDBDBD' }} numberOfLines={2}>
            {short_description}
          </Text>
        </View>
      </View>
    );
  }
}

export default Product;
