import { commonStyles } from '@styles/common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  'product-details': {
    marginTop: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
  },
  'product-details__image': {
    width: '100%',
    aspectRatio: 4 / 3,
    marginBottom: 5,
  },
  'product-details__title': {
    ...commonStyles['font--bolder'],
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 5,
  },
  'product-details__price': {
    fontSize: 40,
    textAlign: 'center',
    color: 'red',
  },
  'product-details__desc': {
    fontSize: 20,
    color: 'grey',
    margin: 10,
  },

});
