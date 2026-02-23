import { Prisma } from "@prisma/client";

const itemSelect = {
  id: true,
  images: true,
  price: true,
  Brand: { select: { id: true, name_ro: true } },
  ItemType: {
    select: {
      id: true,
      name_ro: true,
      name_en: true,
      name_ru: true,
      name_ukr: true,
    },
  },
  gender: true,
  createdAt: true,
} satisfies Prisma.ItemSelect;

export type CatalogItem = Omit<
  Prisma.ItemGetPayload<{ select: typeof itemSelect }>,
  "price"
> & { price: number };
