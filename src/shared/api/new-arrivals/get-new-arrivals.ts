export type NewArrivalItem = {
  id: string;
  brandCode: string;
  displayCode: string;
  price: string;
  priceSale: string;
  images: string[];
  description_en: string;
};

export async function getNewArrivals(): Promise<NewArrivalItem[]> {
  const response = await fetch("/api/new-arrivals", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch new arrivals");
  }

  return response.json();
}
