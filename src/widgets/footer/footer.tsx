import Link from "next/link";

import {TextElement} from "@/shared/ui";
import {useTranslations} from "next-intl";
// import {Button} from "@/shared/ui/shadcn";
import {FacebookIcon, InstagramIcon, TikTokIcon} from "@/shared/ui/icons";


// const footerLinks = [
//     {href: "/shop/women/bags", linkText: "links.women-bags"},
//     {href: "/shop/women/wallets", linkText: "links.women-wallets"},
//     {href: "/shop/women/accessories", linkText: "links.women-accessories"},
//     {href: "/shop/men/bags", linkText: "links.men-bags"},
//     {href: "/shop/men/wallets", linkText: "links.men-wallets"},
//     {href: "/shop/men/accessories", linkText: "links.men-accessories"},
//     {href: "/gifts", linkText: "links.gifts"},
//     {href: "/sales", linkText: "links.sales"},
// ]
// const informations = [
//     {href: "about"}
// ]

export const Footer = () => {
    const t = useTranslations("footer");

    return (
        <div className="bg-white lg:px-containerXlg lg:pt-8 flex flex-col justify-center w-full items-center ">
            <div className="max-w-[1380px] w-full flex flex-col items-center justify-between mx-5">
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">

                    {/* Links */}
                    <div className="flex items-start justify-around mt-10 mx-5 lg:mt-0">
                        <Link href="/about">
                            <TextElement variant="description" className="text-lg">{t('about')}</TextElement>
                        </Link>
                        <Link href="/shipping">
                            <TextElement variant="description" className="text-lg ml-6">{t('shipping')}</TextElement>
                        </Link>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full px-5 lg:p-0 lg:w-auto lg:gap-16 mt-6 lg:mt-0">
                        <div className="flex gap-4">
                            <a href="https://facebook.com/GeantaMea"
                               target="_blank"
                               rel="noopener noreferrer"
                               aria-label="Facebook"
                               className="hover:invert"
                            >
                                <FacebookIcon size={35}/>
                            </a>
                            <a href="https://www.instagram.com/geantamea.md"
                               target="_blank"
                               rel="noopener noreferrer"
                               aria-label="Instagram"
                               className="hover:invert"
                            >
                                <InstagramIcon size={35}/>
                            </a>
                        </div>

                        <div className="flex flex-col items-end lg:items-start">
                            <TextElement variant="description">Chișinău, Moldova</TextElement>
                            <TextElement variant="description">+37379160204</TextElement>
                            <a href="mailto:info@geantamea.md">
                                <TextElement variant="description" className="normal-case">info@geantamea.md</TextElement>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 mt-4 w-full flex px-8 lg:px-containerXlg py-3">
                <TextElement variant="description" className="text-xs text-gray-200 normal-case tracking-wide">
                    © {new Date().getFullYear()} GeantaMea. Toate drepturile sunt rezervate
                </TextElement>
            </div>
        </div>
    );
};