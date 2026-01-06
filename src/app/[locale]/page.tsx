import { NewArrivalsSection } from "@/widgets/new-arrival-section";
import { HeroSection } from "@/widgets/hero-section";
import { CategoriesGrid } from "@/widgets/categories-grid";

export default function HomePage() {
  return (
    <div className="text-black flex flex-col ">
      <HeroSection />
      <NewArrivalsSection />
      <CategoriesGrid />
    </div>
  );
}
