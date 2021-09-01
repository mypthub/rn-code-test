import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  product: {
    borderRadius: 7,
    color: 'blue',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 4 / 3,
    position: 'relative',
  },
  product__image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  product__info: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.3,
  },
});
