import Link from "next/link";
import { useTranslations } from "next-intl";

import { accessoriesMenu } from "@/config/menus/menus";
import { TextElement } from "@/shared/ui/text-element";

const AccessoriesMenuDesktop = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-start">
      {accessoriesMenu.items?.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          <Link href={accessoriesMenu.href}>
            <TextElement
              variant="description"
              className="mb-4 whitespace-nowrap"
            >
              {t(item.key)}
              {/*    Group name */}
            </TextElement>
          </Link>
          {item.children?.map((submenu, index) => (
            <div key={index} className="flex flex-col items-start">
              <Link href={submenu.href} className="flex flex-col items-start">
                <TextElement
                  variant="description"
                  className="mb-1 text-gray-500 normal-case whitespace-nowrap "
                >
                  {t(submenu.key)}
                </TextElement>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AccessoriesMenuDesktop;
