import { MAX_CHARS_DESC, MAX_CHARS_TITLE } from '@common/constants';

export const formatPrice = (num: number): string => {
  const n = Math.round(num);
  if (n <= 0) {
    return 'Free';
  }

  const digits = n.toString(10).split('');

  const val = [
    ...digits.slice(0, digits.length - 2),
    '.',
    ...digits.slice(digits.length - 2),
  ].join('');
  return ['£', val[0] === '.' ? `0${val}` : val].join('');
};

export const elipsis = (max: number) => (str: string): string =>
  str.length > max
    ? [...str.split('').slice(0, max - 3), '...'].join('')
    : str;

export const maybeShortenTitle = elipsis(MAX_CHARS_TITLE);
export const maybeShortenDesc = elipsis(MAX_CHARS_DESC);
