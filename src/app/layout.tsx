import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://geantamea.md"),
  title: {
    template: "%s | GeantaMea",
    default: "GeantaMea - Magazin articole din Piele",
  },
  description: "Accesorii și genți din piele de înaltă calitate.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return children;
}