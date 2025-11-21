import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLang, setSelectedLang] = useState(pathname.substring(1));

  useEffect(() => {
    router.push(selectedLang);
  }, [selectedLang]);

  return (
    <div className="">
      <Dropdown
        values={dropdownMenuOptions}
        name="NAME"
        value={pathname.substring(1)}
        onChange={setSelectedLang}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        changeColor={changeColor}
      />
    </div>
  );
};
