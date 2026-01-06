import React from "react";

import { NewArrivalsClient } from "@/widgets/new-arrival-section";
import { Item } from "@/shared/types/product-types";

export default async function NewArrivalsSection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/new-arrivals`,
  );

  if (!res.ok) throw new Error("Failed to fetch new arrivals");

  const newArrivals: Item[] = await res.json();
  return <NewArrivalsClient newArrivals={newArrivals} />;
}
