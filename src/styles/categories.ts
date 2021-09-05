import { commonStyles } from '@styles/common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  categories: {
    ...commonStyles.margin,
    ...commonStyles['full-height'],
    paddingBottom: 5,
    display: 'flex',
  },
});
