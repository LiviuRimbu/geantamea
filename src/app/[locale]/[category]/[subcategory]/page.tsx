import { notFound } from "next/navigation";
import {
  isValidCategory,
  isValidSubcategory,
} from "@/shared/config/categories";

import { OtherCategories } from "@/widgets/other-categories";

interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { category, subcategory } = await params;

  if (!isValidCategory(category)) {
    return notFound();
  }

  if (!isValidSubcategory(category, subcategory)) {
    return notFound();
  }

  return (
    <main className="mx-containerX olg:mx-containerXlg mt-navbar ">
      <h1></h1>

      <OtherCategories category={category} subcategory={subcategory} />
      <div className="product-grid">Future Catalog Here</div>
    </main>
  );
}
