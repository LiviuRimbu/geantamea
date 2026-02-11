import Link from "next/link";
import { useTranslations } from "next-intl";

import { menMenu } from "@/shared/config/menus/menus";
import { TextElement } from "@/shared/ui/text-element";

export const MenMenuDesktop = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-start">
      {menMenu.items?.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          {/*<Link key={index} href={menMenu.href}>*/}
          <TextElement variant="description" className="mb-4 whitespace-nowrap">
            {t(item.key)}
            {/*    Group name */}
          </TextElement>
          {/*</Link>*/}
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
