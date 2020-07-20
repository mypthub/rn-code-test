import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
} from 'react-native';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      ImageWidth: null,
      ImageHeight: null,
    };
  }

  componentDidMount() {
    const { data } = this.props.route.params;
    Image.getSize(
      data.image,
      (width, height) => {
        this.setState({ ImageWidth: width, ImageHeight: height });
      },
      errorMsg => {
        console.log(errorMsg);
      },
    );
  }

  render() {
    const { data } = this.props.route.params;
    const { price } = this.props.route.params;
    const { old_price } = this.props.route.params;

    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            source={{ uri: data.image }}
            style={[
              styles.image,
              { width: this.state.ImageWidth, height: this.state.ImageHeight },
            ]}
          />
          <Text style={styles.text_name}>Name: {data.name}</Text>
          <View style={styles.price_view}>
            <Text style={styles.text_price}>Price: {price}</Text>
            <Text style={styles.text_old_price}>{old_price}</Text>
          </View>
          <Text style={styles.text_description}>
            Description: {data.description}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
  },
  text_name: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 5,
  },
  text_price: {
    fontSize: 18,
    marginVertical: 5,
  },
  text_old_price: {
    fontSize: 18,
    marginVertical: 5,
    textDecorationLine: 'line-through',
  },
  text_description: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  price_view: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
