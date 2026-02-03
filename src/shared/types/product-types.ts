export type Gender = "male" | "female" | "unisex";

export interface Item {
  id: string;
  brandCode: string;
  displayCode: string;
  price: number;
  gender: Gender;
  isFeatured: boolean | null;
  isNew: boolean | null;
  weight: number;
  width: number;
  height: number;
  depth: number;
  hidden: boolean;
  available: boolean;
  reserved: boolean;
  onSale: boolean;
  pricePurchase: number;
  priceSale: number;
  images: string[];
  info: string;
  about: string;

  description_ro: string;
  description_en: string;
  description_ru: string;
  description_ukr: string;

  productDetails_ro: string[];
  productDetails_en: string[];
  productDetails_ru: string[];
  productDetails_ukr: string[];

  brandId: number;
  colorId: number;
  typeId: number;
  materialId: number;

  createdAt: string;

  Brand: Brand;
  Color: Color;
  Material: Material;
  ItemType: ItemType;
  tags: Tag[];
  AccessoryDetail: AccessoryDetail | null;
}

export type Brand = {
  id: number;
  name_ro: string;
};

export type Color = {
  id: number;
  name_en: string;
  name_ro: string;
  name_ru: string;
  name_ukr: string;
  imageURL: string;
};

export type Material = {
  id: number;
  name_en: string;
  name_ro: string;
  name_ru: string;
  name_ukr: string;
};

export type ItemType = {
  id: number;
  name_en: string;
  name_ro: string;
  name_ru: string;
  name_ukr: string;
};

export type Tag = {
  id: number;
  name_en: string;
  name_ro: string;
  name_ru: string;
  name_ukr: string;
  imageURL: string;
};

export type AccessoryType = {
  id: number;
  name_en: string;
  name_ro: string;
  name_ru: string;
  name_ukr: string;
  imageURL: string | null;
};

export type AccessoryDetail = {
  id: number;
  itemId: string;
  length: number | null;
  carBrand: string | null;
  extraInfo: string | null;
  accessoryTypeId: number;
  AccessoryType: AccessoryType;
};
