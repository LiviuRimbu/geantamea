import React from "react";

import { NewArrivalsClient } from "@/widgets/new-arrival-section";
import { prisma } from "@/shared/lib/prisma";

export default async function NewArrivalsSection() {
  const newArrivals = await prisma.item.findMany({
    where: {
      isNew: true,
      hidden: false,
      available: true,
      gender: { in: ["female", "male"] },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 15,
    select: {
      id: true,
      images: true,
      price: true,
      Brand: {
        select: {
          id: true,
          name_ro: true,
        },
      },
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
    },
  });

  const formattedArrivals = newArrivals.map((item) => ({
    ...item,
    price: item.price.toNumber(),
  }));
  return <NewArrivalsClient newArrivals={formattedArrivals} />;
}
