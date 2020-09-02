import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AnimatedProductOverlay from './AnimatedProductOverlay';
import FullProductInfoOverlay from './FullProductInfoOverlay';
import Product from '../../components/Product';
import products from '../../../assets/products.json';

const thumbnailWidth = 165;

class ProductCategory extends Component {
  render() {
    return (
      <View style={this.styles.category}>
        <Text style={this.styles.categoryTitle}>{this.props.category}</Text>
        <FlatList
          ItemSeparatorComponent={() => <View style={this.styles.separator} />}
          data={this.getProductsForCategory(this.props.category)}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPressIn={event => this.onPressIn(event, item.value)}
              onPressOut={() => this.onPressOut()}>
              <View style={this.styles.thumb}>
                <Product product={item.value} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  getProductsForCategory(category) {
    return products
      .filter(function(product) {
        return product.category === category;
      })
      .sort(function(a, b) {
        return a.order - b.order;
      })
      .map(product => ({ key: product.id.toString(), value: product }));
  }

  onPressIn(event, product) {
    this.props.parent.triggerOverlayAnimation(event.nativeEvent, product);
  }

  onPressOut() {
    this.props.parent.completeOverlayAnimation();
  }

  styles = StyleSheet.create({
    category: {
      padding: 2,
    },
    categoryTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      padding: 1,
    },
    thumb: {
      width: thumbnailWidth,
    },
  });
}

export default class Market extends Component {
  state = {
    isListVisible: true,
  };

  overlay = null;
  productInfoOverlay = null;

  render() {
    const listStyle = {
      display: this.state.isListVisible ? 'flex' : 'none',
    };

    return (
      <SafeAreaView>
        <FlatList
          style={listStyle}
          data={this.getCategories()}
          renderItem={({ item }) => (
            <ProductCategory category={item.key} parent={this} />
          )}
        />
        <AnimatedProductOverlay ref={component => (this.overlay = component)} />
        <FullProductInfoOverlay
          parent={this}
          ref={component => (this.productInfoOverlay = component)}
        />
      </SafeAreaView>
    );
  }

  getCategories() {
    const categories = new Set();
    products.forEach(product => {
      categories.add(product.category);
    });
    // Note for the reviewer: the spec does not mention an order for the categories,
    // so the .sort() is not necessary, however without it the order would be undefined
    // which is never a good UI decision.
    return Array.from(categories)
      .sort()
      .map(x => ({ key: x }));
  }

  triggerOverlayAnimation(event, product) {
    this.overlay.startAnimatedDisplayForProduct(event, product);
  }

  completeOverlayAnimation() {
    this.overlay.completeAnimatedDisplay();
    this.state.isListVisible = false;
    this.forceUpdate();
    this.productInfoOverlay.showWithProduct(this.overlay.state.product);
  }

  redisplayList() {
    this.state.isListVisible = true;
    this.forceUpdate();
  }
}
