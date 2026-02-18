import { FilterIcon } from "@/shared/ui/icons";
import { Button } from "@/shared/ui/shadcn";
import { TextElement } from "@/shared/ui/";

export const CatalogToolbar = () => {
  return (
    <div className="relative flex justify-between items-center w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border-t border-gray-400 w-screen" />
      <Button variant="ghost" className="flex">
        <FilterIcon />
        <TextElement variant="descriptionWhite" className="text-gray-500 ml-2">
          Filter
        </TextElement>
      </Button>
      <TextElement variant="descriptionWhite" className="text-gray-500 ml-2">
        15 Items
      </TextElement>
      <Button variant="ghost" className="flex">
        <TextElement variant="descriptionWhite" className="text-gray-500 ml-2">
          Sort by
        </TextElement>
      </Button>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-t border-gray-400 w-screen" />
    </div>
  );
};
