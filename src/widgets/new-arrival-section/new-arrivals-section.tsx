import React from "react";

import { NewArrivalsClient } from "@/widgets/new-arrival-section";
import { Item } from "@/shared/types/product-types";
import { prisma } from "@/shared/lib/prisma";

export default async function NewArrivalsSection() {
  const newArrivals: Item = await prisma.item.findMany({
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
  });
  // const newArrivals = newArr;
  console.log(newArrivals, "NewArrrrrrirgklajdfg;klajcfbgklpjrn");
  return <NewArrivalsClient newArrivals={newArrivals} />;
}
