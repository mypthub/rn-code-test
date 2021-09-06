import { AVATAR_URI } from '@common/constants';
import { Price } from '@common/price';
import { Discount, ICategory, IProduct } from 'types';
import products from '../../assets/products.json';

const mkCategory = (name: string, products: IProduct[]) => ({
  name,
  products,
});

const mkIProduct = (data: any): IProduct => ({
  ...data,
  discount: data.discount ?? 0,
  price: Price
    .of(data.price ?? 0)
    .discountBy(
      data.discount ?? 0,
      data['discount_type'] ?? Discount.None,
    ),
  seller: {
    imageUri: AVATAR_URI,
  },
  type: data['discount_type'] ?? Discount.None,
});

const splitIntoCategories = (
  result: Record<string, IProduct[]>, p: IProduct,
): Record<string, IProduct[]> => {
  result[p.category] = result[p.category] ? [...result[p.category], p] : [p];
  return result;
};

export const getProductData = (): Promise<ICategory[]> => {
  const cats = products.map(mkIProduct).reduce(splitIntoCategories, {});

  return Promise.resolve(
    Object.keys(cats).map(name => mkCategory(name, cats[name])),
  );
};
