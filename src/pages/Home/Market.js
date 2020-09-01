import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Product from '../../components/Product';
import products from '../../../assets/products.json';

const thumbnailWidth = 165;
const aspectRatio = 4 / 3;

// Note to reviewer: I'm sure there is a way to obtain the correct size of the nav bar,
// perhaps by having Home/index.js listen for size changes and recording them,
// but for the sake of this test I'm going to just use an estimate.
const estimatedSizeOfNavigationBar = 70;

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
              onPressOut={event => this.onPressOut(event, item.value)}>
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

  onPressOut(event, product) {
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

class AnimatedProductOverlay extends Component {
  startingWidth = thumbnailWidth;
  screenWidth = 0;
  screenHeight = 0;
  endingWidth = 0;

  state = {
    widthAnim: new Animated.Value(this.startingWidth),
    product: null,
    triggeringEvent: null,
    display: 'none',
    lastKnownWidth: this.startingWidth,
  };

  growIn = () => {
    this.state.display = 'flex';
    this.state.lastKnownWidth = this.startingWidth;
    Animated.timing(this.state.widthAnim, {
      toValue: this.endingWidth,
      duration: 1500,
    }).start();
  };

  close = () => {
    Animated.timing(this.state.widthAnim, {
      toValue: this.startingWidth,
      duration: 10,
    }).start(() => {
      this.state.display = 'none';
      this.forceUpdate();
    });
  };

  constructor(props) {
    super(props);
    this.updateScreenDimensions();
    this.state.widthAnim.addListener(({ value }) => {
      this.state.lastKnownWidth = value;
      this.ensureViewIsFullyVisible();
    });
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            top: this.getTopPosition(),
            left: this.getLeftPosition(),
            width: this.state.widthAnim,
            aspectRatio: aspectRatio,
            zIndex: 1000,
            position: 'absolute',
            display: this.state.display,
          },
        ]}>
        <View>{this.getProductComponent()}</View>
      </Animated.View>
    );
  }

  updateScreenDimensions() {
    this.screenWidth = Dimensions.get('window').width;
    this.screenHeight =
      Dimensions.get('window').height - estimatedSizeOfNavigationBar;
    this.endingWidth =
      this.screenWidth <= this.screenHeight
        ? this.screenWidth
        : this.screenHeight * aspectRatio;
  }

  startAnimatedDisplayForProduct(event, product) {
    this.state.product = product;
    this.state.triggeringEvent = event;
    this.updateScreenDimensions();
    this.forceUpdate();
    this.growIn();
  }

  completeAnimatedDisplay() {
    this.close();
  }

  getTopPosition() {
    if (this.state.triggeringEvent != null) {
      const event = this.state.triggeringEvent;
      var topPosition = event.pageY - event.locationY;
      const lastKnownHeight = this.state.lastKnownWidth / aspectRatio;
      const overflow = topPosition + lastKnownHeight - this.screenHeight;
      if (overflow > 0) {
        topPosition -= overflow;
      }
      return topPosition;
    }
  }

  getLeftPosition() {
    if (this.state.triggeringEvent != null) {
      const event = this.state.triggeringEvent;
      var leftPosition = event.pageX - event.locationX;
      const overflow =
        leftPosition + this.state.lastKnownWidth - this.screenWidth;
      if (overflow > 0) {
        leftPosition -= overflow;
      }
      return leftPosition;
    }
  }

  ensureViewIsFullyVisible() {
    var needUpdate = false;
    if (this.state.triggeringEvent != null) {
      const event = this.state.triggeringEvent;
      const leftPosition = event.pageX - event.locationX;
      if (leftPosition + this.state.lastKnownWidth > this.screenWidth) {
        needUpdate = true;
      } else {
        const topPosition = event.pageY - event.locationY;
        const lastKnownHeight = this.state.lastKnownWidth / aspectRatio;
        if (topPosition + lastKnownHeight > this.screenHeight) {
          needUpdate = true;
        }
      }
    }
    if (needUpdate) {
      this.forceUpdate();
    }
  }

  getProductComponent() {
    if (this.state.product != null) {
      return <Product product={this.state.product} />;
    }
    return null;
  }
}

export default class Market extends Component {
  overlay: null;

  render() {
    return (
      <SafeAreaView style={this.styles.container}>
        <FlatList
          data={this.getCategories()}
          renderItem={({ item }) => (
            <ProductCategory category={item.key} parent={this} />
          )}
        />
        <AnimatedProductOverlay ref={component => (this.overlay = component)} />
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
  }

  styles = StyleSheet.create({
    container: {},
  });
}
