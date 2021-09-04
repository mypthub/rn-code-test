import { commonStyles } from '@styles/common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  market: {
    ...commonStyles.avoidStatusBar,
    ...commonStyles.margin,
    ...commonStyles['full-height'],
    overflow: 'hidden',
    width: '97%',
    paddingBottom: 35,
    display: 'flex',
  },
});
