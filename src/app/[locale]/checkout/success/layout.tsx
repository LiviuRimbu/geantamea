import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comandă Reușită | GeantaMea",
    description: "Va mulțumim! Comanda d-ra a fost recepționată.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}