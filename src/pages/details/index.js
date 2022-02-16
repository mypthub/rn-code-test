import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get('screen').width - 10;
const height = width / 1.33;

class index extends Component {
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
    } = this.props.route.params.item;
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
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.3)',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialIcons
              name={'keyboard-arrow-left'}
              size={45}
              color={'tomato'}
              style={{ padding: 5 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: 'tomato',
              width: Dimensions.get('screen').width - 55,
            }}
            numberOfLines={1}>
            {name}
          </Text>
        </View>
        <ScrollView
          key={this.props.index}
          style={{
            scaleX: pressed ? 1.05 : 1,
            scaleY: pressed ? 1.05 : 1,
            width,
            borderRadius: 5,
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
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={2}>
                  {name}
                </Text>
                <Text style={{ color: 'tomato', fontSize: 20 }}>
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
            <Text style={{ color: 'rgba(0,0,0,0.6)', fontSize: 16 }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Description:{' '}
              </Text>
              {description}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default index;
