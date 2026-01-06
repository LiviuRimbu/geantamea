import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

import Dropdown from "@/shared/ui/dropdown";

type NavbarActionsProps = {
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  changeColor?: boolean;
};

export const LangSwitcher = ({
  dropdownOpen,
  setDropdownOpen,
  changeColor,
}: NavbarActionsProps) => {
  const isMounted = useRef(false);

  const dropdownMenuOptions = [
    { label: "EN", value: "EN" },
    { label: "RO", value: "RO" },
    { label: "RU", value: "RU" },
    { label: "UKR", value: "UKR" },
  ];

  const pathname = usePathname();
  const testString = "/ro/products/2345";
  // const currentLocale = pathname.split("/")[1];
  const currentLocale = useLocale();

  const [selectedLang, setSelectedLang] = useState(pathname.substring(1, 4));

  return (
    <div className="">
      <Dropdown
        values={dropdownMenuOptions}
        name="NAME"
        value={currentLocale}
        onChange={setSelectedLang}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        changeColor={changeColor}
      />
    </div>
  );
};
