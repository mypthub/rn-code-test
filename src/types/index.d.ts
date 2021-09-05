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

export enum Discount {
  Percent = 'percentage',
  Amount = 'amount',
  None = 'none',
}



export type MarketStackParams = {
  ProductMarket: Record<string, unknown>;
  ProductDetails: { id: number };
};
