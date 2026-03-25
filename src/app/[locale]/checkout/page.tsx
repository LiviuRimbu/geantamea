import { Locale } from "@/shared/types";
import { CheckoutForm, OrderSummary } from "@/features/checkout/";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export const metadata: Metadata = {
  title: "Finalizare Comandă | GeantaMea",
  description: "Securizează comanda ta de genți și portmonee din piele.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};


export default async function Page({ params }: PageProps) {

  return (
    <div className="mt-5">
      <div className="flex justify-center flex-col lg:flex-row-reverse p-4">

        <OrderSummary />
        <CheckoutForm />
      </div>
    </div>
  );
}
