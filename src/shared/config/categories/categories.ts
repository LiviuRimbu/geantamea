export const categories = {
  men: {
    bags: ["backpack", "shoulder bag", "tote", "crossbody", "Portofel"],
    wallets: ["bifold", "card holder", "zip wallet"],
    accessories: ["belt", "gloves", "hat"],
  },
  women: {
    bags: ["handbag", "shoulder bag", "clutch", "tote", "Geantă crossbody"],
    wallets: ["bifold", "card holder", "zip wallet"],
    accessories: ["belt", "scarf", "hat"],
  },
  accessories: {
    keyHolder: ["key ring", "key case"],
    umbrella: ["folding", "straight"],
  },
} as const;

export type Categories = keyof typeof categories;

export type Subcategory<C extends Categories> = keyof (typeof categories)[C] &
  string;

export type ItemType<
  C extends Categories,
  S extends Subcategory<C>,
> = (typeof categories)[C][S] extends readonly string[]
  ? (typeof categories)[C][S][number]
  : never;

export type MenSubcategory = Subcategory<"men">;
export type WomenSubcategory = Subcategory<"women">;
export type AccessoriesSubcategory = Subcategory<"accessories">;

export const isValidCategory = (key: string): key is Categories => {
  return key in categories;
};

export const isValidSubcategory = <C extends Categories>(
  category: C,
  subcategory: string,
): subcategory is Subcategory<C> => {
  return Object.prototype.hasOwnProperty.call(
    categories[category],
    subcategory,
  );
};

export const getAcceptedItemTypes = <
  C extends Categories,
  S extends Subcategory<C>,
>(
  category: C,
  subcategory: S,
): readonly ItemType<C, S>[] => {
  return categories[category][subcategory] as unknown as readonly ItemType<
    C,
    S
  >[];
};
