import { ProductPage } from "@/page-layouts/product";
import { Locale } from "@/shared/types";

type PageProps = {
  params: Promise<{
    locale: Locale;
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id, locale } = await params;
  return <ProductPage id={id} locale={locale} />;
}
