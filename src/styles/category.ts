import { commonStyles } from '@styles/common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  'product-category': {
    flex: 1,
  },
  'product-category__title': {
    ...commonStyles.font,
    ...commonStyles['font--bolder'],
    paddingLeft: 7,
  },
  'product-category__scroll': {
    height: '100%',
    flexDirection: 'row',
  },
});
