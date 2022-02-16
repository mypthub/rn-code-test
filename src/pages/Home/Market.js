import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import products from '../../../assets/products';
import ProductComponent from '../../components/Product';
class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { sections: {}, labels: [] };
  }
  groupBy = (arr, property) => {
    var labels = [];
    var sections = arr.reduce(function(memo, x) {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
        labels.push(x[property]);
      }
      memo[x[property]].push(x);
      return memo;
    }, {});

    labels.forEach(element => {
      sections[element] = sections[element].sort(function(a, b) {
        return a.order - b.order;
      });
    });

    return { sections, labels };
  };
  componentDidMount() {
    const { sections, labels } = this.groupBy(products, 'category');
    this.setState({ sections, labels });
  }
  scaleInAnimated = new Animated.Value(0);
  scaleOutAnimated = new Animated.Value(0);
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.state.labels.length > 0 &&
          this.state.sections != {} &&
          this.state.labels.map((item, index) => {
            let label = item;
            return (
              <View style={{ borderBottomWidth: 1, padding: 5 }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginLeft: 15,
                  }}>
                  {item}
                </Text>
                <FlatList
                  horizontal={true}
                  data={this.state.sections[label]}
                  renderItem={({ item, index }) => (
                    <TouchableWithoutFeedback
                      onPress={() => {
                        this.props.navigation.navigate('detailScreen', {
                          item,
                        });
                      }}
                      onPressIn={() => {
                        let { sections } = this.state;
                        sections[label][index]['pressed'] = true;
                        this.setState({
                          sections,
                        });
                      }}
                      onPressOut={() => {
                        let { sections } = this.state;
                        sections[label][index]['pressed'] = false;
                        this.setState({
                          sections,
                        });
                      }}>
                      <Animated.View>
                        <ProductComponent item={item} index={index} />
                      </Animated.View>
                    </TouchableWithoutFeedback>
                  )}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            );
          })}
      </ScrollView>
    );
  }
}

const SCALE = {
  getScaleTransformationStyle(animated, startSize, endSize) {
    const interpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [startSize, endSize],
    });
    return {
      transform: [{ scale: interpolation }],
    };
  },

  pressInAnimation(animated, duration) {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  },

  pressOutAnimation(animated, duration) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  },
};

export default Market;
