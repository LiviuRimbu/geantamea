import { notFound } from "next/navigation";
import Image from "next/image";

import { TextElement } from "@/shared/ui/text-element";
import {
  isValidCategory,
  isValidSubcategory,
} from "@/shared/config/categories";

import { Catalog } from "@/widgets/catalog";

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
    // <main className="mx-containerX lg:mx-containerXlg relative ">
    <main className="relative lg:mx-containerXlg ">
      <div className="relative h-[400px] w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src={`/categories/${category}-category.webp`}
          // src="/categories/men/men-shoes.jpg"
          alt="image"
          quality={90}
          sizes="100vw"
          fill
          // className="object-cover"
          priority
          className="object-cover"
        />
        <TextElement
          component="h1"
          variant="titleWhite"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {category} {subcategory}
        </TextElement>
      </div>
      {/*<h1>*/}

      {/*</h1>*/}

      {/*<OtherCategories category={category} subcategory={subcategory} />*/}
      <Catalog category={category} subcategory={subcategory} />
    </main>
  );
}
