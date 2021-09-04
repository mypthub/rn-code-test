import { Price } from '@common/price';

export type URI = string;

export type ISeller = {
  imageUri: URI;
};

export type IProduct = {
  description: string;
  picUri: URI;
  price: Price;
  seller: ISeller;
  title: string;
};
