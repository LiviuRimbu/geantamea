export interface ProductItem {
  id: string;
  price: number;
  images: string[];
  gender: string;
  Brand: {
    id: number;
    name_ro: string;
  };
  ItemType: {
    id: number;
    name_ro: string;
    name_en: string;
    name_ru: string;
    name_ukr: string;
  };
}
