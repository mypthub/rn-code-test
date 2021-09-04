import { identity } from '@common/misc';
import { styles } from '@styles/product';
import React, { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

export const RisingView: React.FC = props => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onRelease = () => {
    Animated.timing(fadeAnim, {
      toValue: 1.1,
      duration: 200,
      easing: Easing.inOut(identity),
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
      }).start();
    });
  };

  return (
    <Animated.View
      style={[
        {
          transform: [{ scale: fadeAnim }],
        },
        styles.product,
      ]}
    >
      <View onTouchEnd={onRelease}>{props.children}</View>
    </Animated.View>
  );
};
