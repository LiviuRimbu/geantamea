export type MenuItem = {
  key: string;
  href: string;
  image?: string;
  children?: MenuItem[];
  info?: string;
};

export type MenuGroup = {
  labelKey: string;
  href: string;
  items?: MenuItem[];
  info?: string;
};

export const menus: Record<string, MenuGroup> = {
  women: {
    labelKey: "navbar.women.label",
    href: "/women",
    items: [
      {
        key: "navbar.women.categories.bags.label",
        href: "/women/bags",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/women/bags/handbag",
          },
          {
            key: "navbar.women.categories.bags.handbag",
            href: "/women/bags/handbag",
          },
          {
            key: "navbar.women.categories.bags.clutch",
            href: "/women/bags/clutch",
          },
          {
            key: "navbar.women.categories.bags.backpack",
            href: "/women/bags/backpack",
          },
        ],
      },
      {
        key: "navbar.women.categories.wallets.label",
        href: "/women/wallets",
      },
      {
        key: "navbar.women.categories.accessories.label",
        href: "/women/accessories",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/women/bags/handbag",
          },
          {
            key: "navbar.women.categories.accessories.Keychains",
            href: "/women/accessories/keychains",
          },
          {
            key: "navbar.women.categories.accessories.DocumentHolder",
            href: "/women/accessories/document-holder",
          },
          {
            key: "navbar.women.categories.accessories.CarKeychains",
            href: "/women/accessories/car-keychains",
          },
          {
            key: "navbar.women.categories.accessories.CosmeticBag",
            href: "/women/accessories/cosmetic-bag",
          },
        ],
      },
    ],
  },

  men: {
    labelKey: "navbar.men.label",
    href: "/men",
    items: [
      {
        key: "navbar.men.categories.bags.label",
        href: "/men/bags",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/men/bags/handbag",
          },
          {
            key: "navbar.men.categories.bags.handbag",
            href: "/men/bags/handbag",
          },
          {
            key: "navbar.men.categories.bags.clutch",
            href: "/men/bags/clutch",
          },
          {
            key: "navbar.men.categories.bags.backpack",
            href: "/men/bags/backpack",
          },
        ],
      },
      {
        key: "navbar.men.categories.wallets.label",
        href: "/men/wallets",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/men/bags/handbag",
          },
        ],
      },

      {
        key: "navbar.men.categories.accessories.label",
        href: "/men/accessories",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/men/bags/handbag",
          },
          {
            key: "navbar.men.categories.accessories.Keychains",
            href: "/men/accessories/keychains",
          },
          {
            key: "navbar.men.categories.accessories.DocumentHolder",
            href: "/men/accessories/document-holder",
          },
          {
            key: "navbar.men.categories.accessories.CarKeychains",
            href: "/men/accessories/car-keychains",
          },
        ],
      },
    ],
  },

  accessories: {
    labelKey: "navbar.accessories.label",
    href: "/accessories",
    items: [
      {
        key: "navbar.accessories.label",
        href: "/accessories",
        children: [
          {
            key: "navbar.accessories.categories.Keychains",
            href: "/accessories/keychains",
          },
          {
            key: "navbar.accessories.categories.DocumentHolder",
            href: "/accessories/document-holders",
          },
          {
            key: "navbar.accessories.categories.CarKeychains",
            href: "/accessories/car-keychains",
          },
        ],
      },
    ],
  },

  sale: {
    labelKey: "navbar.sale.label",
    href: "/sale",
  },

  gift: {
    labelKey: "navbar.gift.label",
    href: "/gift",
    info: "navbar.gift.categories.info",
  },
};
export const womenMenu = menus.women;
export const menMenu = menus.men;
export const accessoriesMenu = menus.accessories;
export const saleMenu = menus.sale;
export const giftMenu = menus.gift;
