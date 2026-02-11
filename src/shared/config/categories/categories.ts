export const categories = {
  men: ["bags", "wallets", "accessories"],
  women: ["bags", "wallets", "accessories"],
  accessories: ["keyHolder", "umbrella"],
} as const;

export type Categories = keyof typeof categories;
export type Subcategory = (typeof categories)[Categories][number];

export type MenSubcategory = (typeof categories)["men"][number];
export type WomenSubcategory = (typeof categories)["women"][number];
export type AccessoriesSubcategory = (typeof categories)["accessories"][number];

export const isValidCategory = (key: string): key is Categories => {
  return key in categories;
};

export const isValidSubcategory = (
  category: Categories,
  subcategory: string,
): subcategory is (typeof categories)[typeof category][number] => {
  return (categories[category] as readonly string[]).includes(subcategory);
};
