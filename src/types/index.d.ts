import { Price } from '@common/price';

export type URI = string;

export type ISeller = {
  imageUri: URI;
};

export type IProduct = {
  description: string;
  order: number;
  picUri: URI;
  price: Price;
  seller: ISeller;
  title: string;
};

export type ICategory = {
  name: string;
  products: IProduct[];
};
