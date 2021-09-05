import { Dimensions } from 'react-native';

export const IMAGE_URI =
  'https://via.placeholder.com/728x90.png/f90/fff?text=';

export const AVATAR_URI =
  'https://via.placeholder.com/100x100.png/fff/000?text=JD';

export const AVATAR_SIZE_BIG = 100;
export const AVATAR_SIZE_SMALL = 32;
// more of less, at least on iPhone 8
export const MAX_CHARS_TITLE = Dimensions.get('window').width / 24;
export const MAX_CHARS_DESC = Dimensions.get('window').width / 12;
