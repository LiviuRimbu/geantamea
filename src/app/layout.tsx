import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeantaMea",
  description: "Your bag store",
};

export default async function RootLayout({
  children,
  // params,
}: {
  children: React.ReactNode;
}) {
  // const { locale } = await params;

  return (
    // <html lang="ro">
    <html>
      <body>{children}</body>
    </html>
  );
}
