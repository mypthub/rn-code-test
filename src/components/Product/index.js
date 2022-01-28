import React, { useRef } from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import getPrice from '../../utils/getPrice';
const { width } = Dimensions.get('screen');

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Product = ({ data }) => {
  const zoom = useRef(new Animated.Value(1)).current;

  const zoomIn = () => {
    Animated.timing(zoom, {
      toValue: 1.07,
      duration: 100,
    }).start();
  };

  const zoomOut = () => {
    Animated.timing(zoom, {
      toValue: 1,
      duration: 100,
    }).start();
  };

  return (
    <AnimatedTouchable
      style={[styles.container, { transform: [{ scale: zoom }] }]}
      onPressIn={zoomIn}
      onPressOut={zoomOut}
      activeOpacity={1}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../../assets/images/4_3.png')}
        resizeMode="contain">
        <View style={styles.bottomContainer}>
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.title}>
              {data.name}
            </Text>
            <Text numberOfLines={1} style={styles.title}>
              {getPrice(data)}
            </Text>
            <Text numberOfLines={1} style={styles.description}>
              {data.description}
            </Text>
          </View>
          <Image
            style={styles.pic}
            source={require('../../../assets/images/pic.png')}
          />
        </View>
      </ImageBackground>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    width: width - 80,
    padding: 20,
  },
  bgImage: {
    width: '100%',
    // height: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bottomContainer: {
    width: '100%',
    height: '28%',
    backgroundColor: '#282828',
    opacity: 0.8,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9,
    paddingHorizontal: 12,
  },
  title: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    color: '#BDBDBD',
    fontWeight: '500',
    fontSize: 12,
  },
  info: {
    width: '90%',
  },
  pic: {
    width: 24,
    height: 24,
  },
});

export default Product;
