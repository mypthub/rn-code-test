import { AVATAR_URI, IMAGE_URI } from '@common/constants';
import { Price } from '@common/price';
import { range } from '@common/range';
import { ICategory, IProduct } from 'types';

const mkProduct = (category: string) => (n: number): IProduct => ({
  seller: {
    imageUri: `${AVATAR_URI}+${n}`,
  },
  price: Price.of(Math.round(Math.round(1000)))
              .discountBy(11)
              .amount(),
  name: `Product ${n}`,
  description: `Description ${n}`,
  image: `${IMAGE_URI}${category}+${n}`,
  order: Math.round(Math.random() * 10),
  id: n,
  short_description: 'Nothing',
});

const mkCategory = (name: string) => ({
  name,
  products: range(10).map(mkProduct(name)),
});

export const getProductData = (): Promise<ICategory[]> =>
  Promise.resolve(['Ships', 'Planes', 'Cars'].map(mkCategory));
