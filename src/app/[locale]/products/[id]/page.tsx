import { ProductPage } from "@/pages/product";
import { Locale } from "@/shared/types";

type PageProps = {
  params: {
    locale: Locale;
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id, locale } = params;
  return <ProductPage id={id} locale={locale} />;
}
