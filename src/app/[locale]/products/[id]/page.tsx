import { Item } from "@/shared/types";
import { ProductPageClient } from "@/entities/product/ui";

type ProductPageProps = {
  params: {
    locale: string;
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id, locale } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
  );

  if (!res.ok) throw new Error("Failed to fetch new arrivals");

  const item: Item = await res.json();

  return <ProductPageClient item={item} />;
}
