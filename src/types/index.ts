import { Price } from '@common/price';

export type URI = string;

export type ISeller = {
  imageUri: URI;
};

export type IProduct = {
  category: string;
  description: string;
  id: number;
  image: URI;
  name: string;
  order: number;
  price: Price;
  seller: ISeller;
  short_description: string;
};

export type ICategory = {
  name: string;
  products: IProduct[];
};

// eslint-disable-next-line no-shadow
export enum DiscountType {
  Percent = 'percentage',
  Amount = 'amount',
  None = 'none',
}

export type MarketStackParams = {
  ProductMarket: Record<string, unknown>;
  ProductDetails: { product: IProduct };
};
