import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  border: {
    borderColor: 'black',
    borderWidth: 2,
  },
  font: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '400',
  },
  'font--white': {
    color: '#ffffff',
  },
  'font--bolder': {
    fontWeight: '600',
  },
  'font--smaller': {
    fontSize: 14,
  },
});
