import React, { PureComponent } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const THE_CHOSEN_ONE =
  'https://static.wikia.nocookie.net/camp-halfblood-fanon/images/c/ca/Unknown.jpeg/revision/latest/top-crop/width/360/height/450?cb=20200614091044';

class Product extends PureComponent {
  scaleAnimation = new Animated.Value(1);
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <TouchableWithoutFeedback
        styles={styles.root}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}>
        <Animated.View
          style={[
            { flex: 1, marginVertical: 10, marginHorizontal: 10 },
            {
              transform: [{ scale: this.scaleAnimation }],
            },
          ]}>
          <View>
            <ImageBackground
              imageStyle={styles.productImage}
              style={styles.productImage}
              source={{
                uri: data.image,
              }}>
              <View style={styles.infoBar}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title} numberOfLines={1}>
                    {data.name}
                  </Text>
                  {getProductPrice(data)}
                  <Text style={styles.shortDescription} numberOfLines={1}>
                    {data.short_description}
                  </Text>
                </View>

                <Image
                  style={styles.avatar}
                  source={{
                    uri: THE_CHOSEN_ONE,
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  onPressIn = () => {
    Animated.spring(this.scaleAnimation, {
      toValue: 1.05,
    }).start();
  };

  onPressOut = () => {
    Animated.spring(this.scaleAnimation, {
      toValue: 1,
    }).start();
  };
}

const getProductPrice = (data) => {
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
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.strikeThroughPrice}>GBP {price.toFixed(2)}</Text>
          <Text style={styles.price}> GBP {finalPrice.toFixed(2)}</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    aspectRatio: 4 / 3,
  },
  productImage: {
    flex: 1,
    borderRadius: 10,
    width: 400,
    aspectRatio: 4 / 3,
    overflow: 'hidden',
  },
  infoBar: {
    position: 'absolute',
    bottom: 0,
    start: 0,
    end: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(74,77,77,0.5)',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  strikeThroughPrice: {
    color: 'white',
    textDecorationLine: 'line-through',
    paddingTop: 5,
  },
  price: {
    color: 'white',
    paddingTop: 5,
  },
  shortDescription: {
    color: 'lightgrey',
    paddingTop: 5,
    paddingBottom: 5,
  },
  avatar: { margin: 5, width: 25, height: 25, borderRadius: 25 },
});

export default Product;
