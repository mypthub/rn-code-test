import { AVATAR_SIZE_BIG, AVATAR_SIZE_SMALL } from '@common/constants';
import { styles } from '@styles/avatar';
import React from 'react';
import { Image } from 'react-native';
import { URI } from 'types';

type Props = {
  uri: URI;
  size: 'big' | 'small';
};

const getRealSize = (type: Props['size']): number =>
  type === 'big' ? AVATAR_SIZE_BIG : AVATAR_SIZE_SMALL;

export const Avatar = (props: Props) => (
  <Image
    style={{ ...styles.avatar__image, height: getRealSize(props.size) }}
    source={{ uri: props.uri }}
  />
);
