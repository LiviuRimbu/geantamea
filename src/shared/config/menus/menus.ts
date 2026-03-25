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
    href: "/shop/women/bags",
    items: [
      {
        key: "navbar.women.categories.bags.label",
        href: "/shop/women/bags",
        children: [
          // {
          //   key: "navbar.men.categories.bags.view-all",
          //   href: "/women/bags/",
          // },
          {
            key: "navbar.women.categories.bags.handbag",
            href: "/shop/women/bags/",
          },
          {
            key: "navbar.women.categories.bags.clutch",
            href: "/shop/women/wallets/",
          },
          {
            key: "navbar.women.categories.bags.backpack",
            href: "/shop/women/accessories/",
          },
        ],
      },
      {
        key: "navbar.women.categories.wallets.label",
        href: "/shop/women/wallets",
      },
      {
        key: "navbar.women.categories.accessories.label",
        href: "/shop/women/accessories",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/shop/women/bags/",
          },
          {
            key: "navbar.women.categories.accessories.Keychains",
            href: "/shop/women/accessories/",
          },
          {
            key: "navbar.women.categories.accessories.DocumentHolder",
            href: "/shop/women/accessories/",
          },
          {
            key: "navbar.women.categories.accessories.CarKeychains",
            href: "/shop/women/accessories/",
          },
          {
            key: "navbar.women.categories.accessories.CosmeticBag",
            href: "/shop/women/accessories/",
          },
        ],
      },
    ],
  },

  men: {
    labelKey: "navbar.men.label",
    href: "/shop/men/bags",
    items: [
      {
        key: "navbar.men.categories.bags.label",
        href: "/shop/men/bags",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/shop/men/bags/",
          },
          {
            key: "navbar.men.categories.bags.handbag",
            href: "/shop/men/bags/",
          },
          {
            key: "navbar.men.categories.bags.clutch",
            href: "/shop/men/bags/",
          },
          {
            key: "navbar.men.categories.bags.backpack",
            href: "/shop/men/bags/",
          },
        ],
      },
      {
        key: "navbar.men.categories.wallets.label",
        href: "/shop/men/wallets",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/shop/men/wallets/",
          },
        ],
      },

      {
        key: "navbar.men.categories.accessories.label",
        href: "/shop/men/accessories",
        children: [
          {
            key: "navbar.men.categories.bags.view-all",
            href: "/shop/men/accessories/",
          },
          {
            key: "navbar.men.categories.accessories.Keychains",
            href: "/shop/men/accessories/",
          },
          {
            key: "navbar.men.categories.accessories.DocumentHolder",
            href: "/shop/men/accessories",
          },
          {
            key: "navbar.men.categories.accessories.CarKeychains",
            href: "/shop/men/accessories/",
          },
        ],
      },
    ],
  },

  // accessories: {
  //   labelKey: "navbar.accessories.label",
  //   href: "/accessories",
  //   items: [
  //     {
  //       key: "navbar.accessories.label",
  //       href: "/accessories",
  //       children: [
  //         {
  //           key: "navbar.accessories.categories.Keychains",
  //           href: "/accessories/keychains",
  //         },
  //         {
  //           key: "navbar.accessories.categories.DocumentHolder",
  //           href: "/accessories/document-holders",
  //         },
  //         {
  //           key: "navbar.accessories.categories.CarKeychains",
  //           href: "/accessories/car-keychains",
  //         },
  //       ],
  //     },
  //   ],
  // },

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
