export type HeroContentResponse = {
  content: string[];
}[];

export async function getHeroContent(): Promise<string[]> {
  const response = await fetch("/api/ui/hero-section");

  if (!response.ok) {
    throw new Error(`Hero content request failed with status ${response.status}`);
  }

  const data: HeroContentResponse = await response.json();

  return data.flatMap((entry) => entry.content);
}
