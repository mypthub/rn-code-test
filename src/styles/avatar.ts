import { commonStyles } from '@styles/common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    borderColor: 'black',
    borderWidth: 2,
    flex: 1,
  },
  avatar__image: {
    ...commonStyles.border,
    aspectRatio: 1,
    borderRadius: 100 / 2,
    height: '100%',
  },
});
