import { Locale } from "@/shared/types";
import { Params } from "next/dist/server/request/params";
import { CheckoutForm, OrderSummary } from "@/features/checkout/";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  return (
    <div className="mt-5">
      <div className="flex justify-center flex-col lg:flex-row-reverse p-4">

        <OrderSummary />
        <CheckoutForm />
      </div>
    </div>
  );
}
