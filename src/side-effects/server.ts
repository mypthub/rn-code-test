import { AVATAR_URI } from '@common/constants';
import { Price } from '@common/price';
import { DiscountType, ICategory, IProduct } from 'types';
import productData from '../../assets/products.json';

type ProductData = {
  id: number;
  name: string;
  image: string;
  short_description: string;
  description: string;
  price: number;
  discount: number | null;
  discount_type: string | null;
  order: number;
  category: string;
};

const mkCategory = (name: string, products: IProduct[]) => ({
  name,
  products,
});

const mkDiscountType = (d: ProductData['discount_type']): DiscountType => {
  switch (d) {
    case 'percentage':
      return DiscountType.Percent;
    case 'amount':
      return DiscountType.Amount;
    default:
      return DiscountType.None;
  }
};
const mkIProduct = (data: ProductData): IProduct => ({
  ...data,
  price: Price.of(data.price ?? 0).discountBy(
    data.discount ?? 0,
    mkDiscountType(data.discount_type),
  ),
  seller: {
    imageUri: AVATAR_URI,
  },
});

const splitIntoCategories = (
  result: Record<string, IProduct[]>,
  p: IProduct,
): Record<string, IProduct[]> => {
  result[p.category] = result[p.category] ? [...result[p.category], p] : [p];
  return result;
};

export const getProductData = (): Promise<ICategory[]> => {
  const cats = productData.map(mkIProduct).reduce(splitIntoCategories, {});

  return Promise.resolve(
    Object.keys(cats).map((name) => mkCategory(name, cats[name])),
  );
};
