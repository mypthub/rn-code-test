import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  border: {
    borderColor: 'red',
    borderWidth: 2,
  },
  'full-height': {
    height: '100%',
  },
  avoidStatusBar: {
    marginTop: 40,
  },
  margin: {
    margin: 5,
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
