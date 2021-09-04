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
