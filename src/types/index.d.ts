import { Price } from '@common/price';

export type URI = string;

export type ISeller = {
  imageUri: URI;
};

export type IProduct = {
  id: number;
  name: string;
  image: URI;
  description: string;
  short_description: string;
  order: number;
  price: Price;
  seller: ISeller;
};

export type ICategory = {
  name: string;
  products: IProduct[];
};
