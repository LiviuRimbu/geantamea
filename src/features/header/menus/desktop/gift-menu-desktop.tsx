import Link from "next/link";
import { useTranslations } from "next-intl";

import { giftMenu } from "@/config/menus/menus";
import { TextElement } from "@/shared/ui/text-element";

const GiftMenuDesktop = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-start">
      Info about GIFTS. Need to refactor
      {giftMenu.items?.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          <Link href={giftMenu.href}>
            <TextElement
              variant="description"
              className="mb-4 whitespace-nowrap"
            >
              {t(item.key)}
              {/*    Group name */}
            </TextElement>
          </Link>
          {item.children?.map((submenu, index) => (
            <div className="flex flex-col items-start">
              <Link
                key={index}
                href={submenu.href}
                className="flex flex-col items-start"
              >
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

export default GiftMenuDesktop;
