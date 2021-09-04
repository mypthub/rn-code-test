export type URI = string;

export type IPrice = number;

export type ISeller = {
  imageUri: URI;
};

export type IProduct = {
  description: string;
  picUri: URI;
  price: IPrice;
  seller: ISeller;
  title: string;
};
