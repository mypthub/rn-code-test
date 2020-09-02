import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import InfoBar from '../../components/Product/InfoBar';

const estimatedSizeOfNavigationBar = 75;

export default class FullProductInfoOverlay extends Component {
  state = {
    product: null,
  };

  parent = null;
  scrollView = null;

  onOrientationChanged = () => this.forceUpdate();

  constructor(props) {
    super(props);
    this.parent = props.parent;
    Dimensions.addEventListener('change', this.onOrientationChanged);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onOrientationChanged);
  }

  render() {
    const dimensions = Dimensions.get('window');

    const style = {
      display: this.state.product == null ? 'none' : 'flex',
    };

    return (
      <SafeAreaView style={style}>
        <Button onPress={() => this.dismiss()} title={'< Back'} />
        <View
          style={{
            height: 'auto',
            maxHeight: dimensions.height - estimatedSizeOfNavigationBar,
          }}>
          <ScrollView ref={component => (this.scrollView = component)}>
            {this.getProductDisplay()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  getProductDisplay() {
    if (this.state.product != null) {
      const product = this.state.product;
      return (
        <View style={styles.container}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <InfoBar product={product} displaySizeHint={'full'} />
        </View>
      );
    }
    return null;
  }

  showWithProduct(product) {
    this.state.product = product;
    this.scrollView.scrollTo({ x: 0, y: 0, animated: false });
    this.forceUpdate();
  }

  dismiss() {
    this.state.product = null;
    this.forceUpdate();
    this.parent.redisplayList();
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
  },
});
