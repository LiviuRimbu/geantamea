import { HeroSectionClient } from "@/widgets/hero-section/hero-section-client";
import { prisma } from "@/shared/lib/prisma";

export default async function HeroSection() {
  try {
    const hero = await prisma.hero.findMany({
      select: { content: true },
    });

    const heroContent = hero.map((item) => item.content).flat();
    return <HeroSectionClient heroContent={heroContent} />;
  } catch (error) {
    console.error("Failed to fetch hero content:", error);
    return null;
  }
}
