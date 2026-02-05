import { usePathname } from "next/navigation";
import React, { useState } from "react";
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
  const dropdownMenuOptions = [
    { label: "EN", value: "EN" },
    { label: "RO", value: "RO" },
    { label: "RU", value: "RU" },
    { label: "UKR", value: "UKR" },
  ];

  const pathname = usePathname() || "/";

  const currentLocale = useLocale();

  const [_selectedLang, setSelectedLang] = useState(pathname.substring(1, 4));
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
