import dynamic from "next/dynamic";
import { HeroSection } from "@/widgets/hero-section";

const NewArrivalsSection = dynamic(
  () =>
    import("@/widgets/new-arrival-section").then((mod) => ({
      default: mod.NewArrivalsSection,
    })),
  {
    loading: () => <div className="h-[400px]" />,
  },
);

const CategoriesGrid = dynamic(
  () =>
    import("@/widgets/categories-grid").then((mod) => ({
      default: mod.CategoriesGrid,
    })),
  {
    loading: () => <div className="h-[600px]" />,
  },
);

export const HomePage = () => {
  return (
    <div className="text-black flex flex-col">
      <HeroSection />
      <NewArrivalsSection />
      <CategoriesGrid />
    </div>
  );
};
