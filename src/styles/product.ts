import { commonStyles } from '@styles/common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  product: {
    aspectRatio: 4 / 3,
    borderRadius: 7,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  product__image: {
    aspectRatio: 4 / 3,
    width: '100%',
  },
  product__info: {
    backgroundColor: '#282828',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    height: '30%',
    opacity: 0.8,
    padding: 10,
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
  },
  product__info__avatar: {
  },
  product__info__props: {
    height: '100%',
  },
  'product__info__props--title': {
    ...commonStyles.font,
    ...commonStyles['font--white'],
    ...commonStyles['font--bolder'],
  },
  'product__info__props--price': {
    ...commonStyles.font,
    ...commonStyles['font--white'],
    ...commonStyles['font--bolder'],
  },
  'product__info__props--description': {
    ...commonStyles.font,
    ...commonStyles['font--white'],
    ...commonStyles['font--smaller'],
  },
});
