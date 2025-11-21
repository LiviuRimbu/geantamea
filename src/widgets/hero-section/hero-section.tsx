import { HeroSectionClient } from "@/widgets/hero-section/hero-section-client";

export default async function HeroSection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/ui/hero-section`,
  );

  if (!res.ok) throw new Error("Failed to fetch hero-section content");

  const heroContent: string[] = await res.json();

  return <HeroSectionClient heroContent={heroContent} />;
}
