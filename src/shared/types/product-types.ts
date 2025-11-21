export interface Item {
  id: string;
  brandCode: string;
  displayCode: string;
  price: string;
  gender: "male" | "female" | "unisex" | string;
  isFeatured: boolean;
  isNew: boolean;
  weight: number;
  width: number;
  height: number;
  depth: number;
  hidden: boolean;
  available: boolean;
  reserved: boolean;
  onSale: boolean;
  pricePurchase: string;
  priceSale: string;
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
}
